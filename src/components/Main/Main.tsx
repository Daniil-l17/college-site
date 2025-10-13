import Hero from "@/components/Main/components/Hero";
import Videos from "@/components/Main/components/Videos";
import Gallery from "@/components/Main/components/Gallery";
import YandexMap from "@/components/YandexMap";
import Quiz from "@/components/Main/components/Quiz";


export default function Main() {
  return (
    <main className="max-w-[100vw]">
      <Hero />
      <section id="content-wrap" className="relative">
        <section id="videos" className="mx-auto max-w-7xl px-2">
          <Videos />
        </section>
        <YandexMap />
        <section id="quiz">
          <Quiz />
        </section>
        <Gallery />
      </section>
    </main>
  );
}


