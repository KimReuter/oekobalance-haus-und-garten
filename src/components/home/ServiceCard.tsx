import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({
  title, desc, img, alt, href,
}: { title: string; desc: string; img: string; alt: string; href: string; }) {
  return (
    <Link href={href} className="group block overflow-hidden rounded-2xl bg-brand-light hover:shadow-md transition no-underline">
      <div className="relative aspect-[4/3]">
        <Image src={img} alt={alt} fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-brand-secondary">{desc}</p>
        <span className="mt-4 inline-block text-sm font-medium text-brand-primary">Mehr erfahren →</span>
      </div>
    </Link>
  );
}