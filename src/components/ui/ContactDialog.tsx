"use client";

import { Dialog } from "@headlessui/react";
import { X } from "lucide-react"; // <- Icon (oder eigenes SVG)

type ContactDialogProps = {
  open: boolean;
  onClose: () => void;
};

export default function ContactDialog({ open, onClose }: ContactDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-[100000]">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

      {/* Panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Schließen</span>
          </button>

          <Dialog.Title className="text-xl font-bold mb-4">
            Projekt starten
          </Dialog.Title>

          <form className="grid gap-4">
            <input
              className="rounded-lg border border-slate-300 px-4 py-3"
              placeholder="Dein Name"
            />
            <input
              className="rounded-lg border border-slate-300 px-4 py-3"
              placeholder="Deine E-Mail"
              type="email"
            />
            <textarea
              className="rounded-lg border border-slate-300 px-4 py-3"
              rows={4}
              placeholder="Deine Nachricht"
            />
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-slate-600"
              >
                Abbrechen
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-brand-primary text-white font-semibold"
              >
                Absenden 🚀
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}