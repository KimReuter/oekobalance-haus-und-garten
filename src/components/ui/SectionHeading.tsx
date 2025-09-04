import Link from "next/link";

export default function SectionHeading({
  title,
  linkText,
  linkHref,
}: {
  title: string;
  linkText?: string;
  linkHref?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      {linkText && linkHref && (
        <Link href={linkHref} className="text-brand-primary">
          {linkText} →
        </Link>
      )}
    </div>
  );
}