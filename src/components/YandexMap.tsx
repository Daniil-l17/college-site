"use client";

import { useState } from "react";

export default function YandexMap() {
  const [loaded, setLoaded] = useState(false);
  return (
    <section id="map" className="py-10">
      <div className="mx-auto max-w-7xl px-2">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">Как нас найти</h2>
        <div className="mb-8">
          <div className="h-[3px] w-54 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full" />
        </div>
        <div className="text-sm md:text-base text-black/70 mb-4">
          <div><span className="font-medium">Адрес:</span> ул. 30 лет Победы, 44/А, Сургут.</div>
          <div>к.101, БЦ "Север"</div>
        </div>
        <div className="relative overflow-hidden rounded-xl ring-1 ring-black/10">
          {!loaded && (
            <div className="absolute inset-0 grid place-items-center bg-white/70 backdrop-blur-[2px]">
              <div className="flex flex-col items-center">
                <div className="h-7 w-7 rounded-full border-2 border-brand-500 border-t-transparent animate-spin" />
                <div className="mt-2 text-xs text-neutral-600">Загрузка карты…</div>
              </div>
            </div>
          )}
          <iframe
            src="https://yandex.ru/map-widget/v1/?ol=biz&oid=128509825790&ll=73.431389%2C61.253656&z=17"
            width="100%"
            height="600"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>
    </section>
  );
}


