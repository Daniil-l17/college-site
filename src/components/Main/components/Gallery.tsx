"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type GalleryItem = {
  id: string;
  title: string;
  image: string;
  tag: string;
};

const galleryData: GalleryItem[] = [
  {
    id: "1",
    title: "Научный форум",
    tag: "Наука",
    image:
      "https://images.unsplash.com/photo-1519455953755-af066f52f1ea?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Фестиваль искусств",
    tag: "Творчество",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Спортивные соревнования",
    tag: "Спорт",
    image:
      "https://images.unsplash.com/photo-1521417531039-94e7456a8e8f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Жизнь кампуса",
    tag: "Кампус",
    image:
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Gallery() {
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!gridRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gallery-card",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.05,
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Галерея</h2>
        <div ref={gridRef} className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryData.map((item) => (
            <article key={item.id} className="gallery-card group rounded-xl overflow-hidden ring-1 ring-black/10 bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-4">
                <div className="text-xs uppercase tracking-wide text-brand-600">{item.tag}</div>
                <h3 className="text-base font-semibold mt-1">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


