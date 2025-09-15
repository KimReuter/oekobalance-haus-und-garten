// src/components/ui/ButtonLink.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>; // <- erlaubt target, rel, aria-*, etc.

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...rest // <- z.B. target, rel
}: Props) {
  const base = "inline-block";

  const innerBase =
    "inline-flex items-center justify-center box-border rounded-xl px-5 py-3 " +
    "text-base font-semibold text-center no-underline hover:no-underline " +
    "transition will-change-transform";

  const styles: Record<Variant, string> = {
    primary:
      "bg-brand-primary text-brand-light hover:bg-brand-primary-xlight hover:text-brand-primary",
    secondary:
      "border border-brand-primary text-brand-primary hover:bg-brand-primary-xlight",
  };

  return (
    <Link href={href} className={`${base} ${className}`} {...rest}>
      <motion.span
        className={`${innerBase} ${styles[variant]}`}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 24px rgba(0,0,0,0.18)" }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {children}
      </motion.span>
    </Link>
  );
}