"use client";
import { useEffect, useMemo, useRef } from "react";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import { DefaultVideoLayout, defaultLayoutIcons } from "@vidstack/react/player/layouts/default";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

type VideoItem = { id: string; src: string; title: string };

export default function Videos() {
  const items: VideoItem[] = useMemo(
    () => [
      { id: "v1", src: "/video/IMG_7270.MOV", title: "Видео 1" },
      { id: "v2", src: "/video/IMG_7268.MP4", title: "Видео 2" },
      { id: "v3", src: "/video/IMG_7241.MOV", title: "Видео 3" },
      { id: "v4", src: "/video/IMG_7222.MOV", title: "Видео 4" },
    ],
    []
  );

  const playersRef = useRef<Map<string, HTMLMediaElement>>(new Map());
  const boundSet = useRef<WeakSet<HTMLMediaElement>>(new WeakSet());
  const sectionRef = useRef<HTMLElement | null>(null);

  const pauseOthersExcept = (keepId: string) => {
    playersRef.current.forEach((media, id) => {
      if (id !== keepId) {
        try { media.pause(); } catch {}
      }
    });
  };

  useEffect(() => {
    return () => {
      playersRef.current.clear();
    };
  }, []);

  useEffect(() => {
    const handlePlayCapture = (ev: Event) => {
      const target = ev.target as EventTarget | null;
      if (!target) return;
      const sectionEl = sectionRef.current;
      const isInside = sectionEl ? (target instanceof Node && sectionEl.contains(target)) : true;
      if (!isInside) return;
      const scope = sectionEl ?? document;
      const list = scope.querySelectorAll("video");
      list.forEach((v) => {
        if (v !== target) {
          try { v.pause(); } catch {}
        }
      });
    };
    document.addEventListener("play", handlePlayCapture, true);
    document.addEventListener("playing", handlePlayCapture, true);
    return () => {
      document.removeEventListener("play", handlePlayCapture, true);
      document.removeEventListener("playing", handlePlayCapture, true);
    };
  }, []);

  return (
    <section ref={sectionRef as any} className="w-full py-10">
      <h2 className="text-2xl md:text-4xl font-bold mb-2 ">Видео студентов🔥</h2>
      <div className="mb-8">
        <div className="h-[3px] w-54 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {items.map((item) => (
          <article key={item.id} className="group rounded-xl overflow-hidden">
            <div className="relative w-full h-[470px] bg-black rounded-xl overflow-hidden">
              <MediaPlayer
                playsInline
                className="vds-player w-full h-full"
                src={item.src}
                ref={(el) => {
                  if (!el) return;
                  const media = (el as any).querySelector?.("video") as HTMLMediaElement | null;
                  if (media) {
                    playersRef.current.set(item.id, media);
                    if (!boundSet.current.has(media)) {
                      boundSet.current.add(media);
                      const handler = () => pauseOthersExcept(item.id);
                      media.addEventListener("play", handler, true);
                      media.addEventListener("playing", handler, true);
                    }
                  }
                }}
                onPlay={() => {
                  pauseOthersExcept(item.id);
                }}
              >
                <MediaProvider>
                  <video className="absolute inset-0 h-full w-full object-cover" />
                </MediaProvider>
                <DefaultVideoLayout icons={defaultLayoutIcons} />
              </MediaPlayer>
            </div>
            <div className="px-2 py-2">
              <div className="text-xs font-medium">{item.title}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


