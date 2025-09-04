// src/components/ui/Section.tsx
export default function Section({
  children, className = "", bg = "",
}: { children: React.ReactNode; className?: string; bg?: string }) {
  return <section className={`py-12 sm:py-16 lg:py-20 ${bg} ${className}`}>{children}</section>;
}