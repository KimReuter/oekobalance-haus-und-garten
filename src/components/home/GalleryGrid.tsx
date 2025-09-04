import Image from "next/image";

export default function GalleryGrid() {
  const images = ["/gal-1.jpg", "/gal-2.jpg", "/gal-3.jpg"];

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-3">
      {images.map((src, i) => (
        <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src={src}
            alt={`Projektbeispiel ${i + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}