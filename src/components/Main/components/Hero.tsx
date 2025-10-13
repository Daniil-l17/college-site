"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!heroRef.current) return;
    const el = heroRef.current as HTMLElement;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-title",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-sub",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.08, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-cta",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.16, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-credit-title",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.24, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-credit-names",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.32, ease: "power3.out" }
      );


      const drift = gsap.timeline({ repeat: -1, defaults: { ease: "sine.inOut" } });
      drift
        .to(el, { "--g1x": "12%", "--g1y": "-8%", duration: 2 })
        .to(el, { "--g2x": "88%", "--g2y": "-18%", duration: 2 })
        .to(el, { "--g1x": "10%", "--g1y": "-6%", duration: 2 })
        .to(el, { "--g2x": "92%", "--g2y": "-22%", duration: 2 })
        .to(el, { "--g1x": "8%",  "--g1y": "-10%", duration: 2 })
        .to(el, { "--g2x": "90%", "--g2y": "-20%", duration: 2 });


      return () => {
        drift.kill();
      };
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative hero-bg hero-fade-bottom">
      <div className="mx-auto max-w-7xl px-4 py-18 min-h-[650px] flex flex-col items-center justify-center text-center">
        <h1 className="hero-title text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Жизнь <span className="text-gradient">нашего колледжа</span>
        </h1>
        <p className="hero-sub text-base md:text-lg text-black/70 max-w-2xl">
          Творчество, наука, спорт и дружба — каждый день насыщен событиями. Узнай больше о том, чем живут студенты нашего колледжа.
        </p>
        <div className="hero-cta mt-8 flex gap-4">
          <a href="#events" className="rounded-full px-5 py-3 bg-brand-500 hover:bg-brand-600 text-white text-sm transition-colors">Ближайшие события</a>
          <a href="#gallery" className="rounded-full px-5 py-3 bg-black/5 hover:bg-black/10 text-black text-sm transition-colors">Смотреть галерею</a>
        </div>
        <div className="mt-6 text-center">
          <p className="hero-credit-title text-xs md:text-sm text-neutral-500">Создание сайта осуществляли</p>
          <p className="hero-credit-names mt-1 text-sm md:text-base text-neutral-700">
            <span className="font-semibold text-gradient">Лукьнов Даниил</span> и <span className="font-semibold text-gradient">Слепушкина Екатерина</span>
          </p>
        </div>
      </div>
    </section>
  );
}


