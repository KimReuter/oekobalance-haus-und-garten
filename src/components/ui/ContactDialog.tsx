"use client";

import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ContactDialog({ open, onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Honeypot (muss leer bleiben)
  const [website, setWebsite] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  /** Dialog sauber schließen + Reset */
  function handleClose() {
    setStatus(null);
    setLoading(false);
    setName("");
    setEmail("");
    setMessage("");
    setWebsite("");
    onClose();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Client-Side-Validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("Bitte Name, E-Mail und Nachricht ausfüllen.");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          website, // 👈 Honeypot mitsenden
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus(data?.error ?? "Senden fehlgeschlagen.");
        setLoading(false);
        return;
      }

      setStatus("Gesendet ✅ Wir melden uns zeitnah.");

      // optionales Analytics-Event
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("contact_submit_success"));
      }

      setTimeout(handleClose, 900);
    } catch {
      setStatus("Netzwerkfehler – bitte später erneut versuchen.");
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-[100000]">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

      {/* Panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
          {/* Close Button */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute right-4 top-4 rounded-full p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Schließen</span>
          </button>

          <Dialog.Title className="text-xl font-bold mb-4">
            Projekt starten
          </Dialog.Title>

          <form onSubmit={handleSubmit} className="grid gap-4">
            {/* Honeypot – unsichtbar */}
            <div className="hidden">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                autoComplete="off"
                tabIndex={-1}
              />
            </div>

            <input
              className="rounded-lg border border-slate-300 px-4 py-3"
              placeholder="Dein Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="rounded-lg border border-slate-300 px-4 py-3"
              placeholder="Deine E-Mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              className="rounded-lg border border-slate-300 px-4 py-3"
              rows={4}
              placeholder="Deine Nachricht"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            {status && (
              <p className="text-sm text-slate-700 text-center">{status}</p>
            )}

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 text-slate-600"
              >
                Abbrechen
              </button>

              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 rounded-lg bg-brand-primary text-white font-semibold disabled:opacity-60"
              >
                {loading ? "Sende…" : "Absenden 🚀"}
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}