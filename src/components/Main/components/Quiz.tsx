"use client";

import { useMemo, useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

type Option = { id: string; label: string };
type Question = {
  id: string;
  title: string;
  options: Option[];
  correctId: string;
};

export default function Quiz() {
  const questions: Question[] = useMemo(
    () => [
      {
        id: "q1",
        title: "Сколько основных направлений обучения в нашем колледже?",
        options: [
          { id: "a", label: "3" },
          { id: "b", label: "5" },
          { id: "c", label: "6+ (включая ИИ и дизайн)" },
          { id: "d", label: "1" },
        ],
        correctId: "c",
      },
      {
        id: "q2",
        title: "Можно ли поступить без ЕГЭ?",
        options: [
          { id: "a", label: "Да, можно" },
          { id: "b", label: "Нет" },
          { id: "c", label: "Зависит от региона/программы" },
          { id: "d", label: "Только с ЕГЭ" },
        ],
        correctId: "a",
      },
      {
        id: "q3",
        title: "Когда начинаются стажировки у студентов?",
        options: [
          { id: "a", label: "С 1 курса" },
          { id: "b", label: "Только на 4 курсе" },
          { id: "c", label: "После выпуска" },
          { id: "d", label: "С 2 курса" },
        ],
        correctId: "a",
      },
    ],
    []
  );

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const optionsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (submitted) return;
    const el = optionsRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, x: direction > 0 ? 40 : -40 },
      { opacity: 1, x: 0, duration: 0.45, ease: "power2.out" }
    );
  }, [currentIndex, submitted, direction]);

  const score = useMemo(
    () =>
      questions.reduce((acc, q) => (answers[q.id] === q.correctId ? acc + 1 : acc), 0),
    [answers, questions]
  );

  const total = questions.length;
  const percent = Math.round((score / Math.max(total, 1)) * 100);

  return (
    <section id="quiz" className="min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-9xl w-full flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">Проверь себя</h2>
        <div className="mb-8 flex justify-center">
          <div className="h-[3px] w-54 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full" />
        </div>

        {!submitted ? (
          <form
            className="w-full max-w-7xl mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            {(() => {
              const q = questions[currentIndex];
              const name = `q_${q.id}`;
              const checkedId = answers[q.id];
              return (
                <fieldset className="rounded-xl ring-1 ring-black/10 bg-white/70 backdrop-blur p-6 max-w-7xl h-[500px] md:h-[450px] grid grid-rows-[auto,1fr]">
                  <div className="flex items-center justify-between mb-4">
                    <legend className="font-semibold text-base md:text-lg">{q.title}</legend>
                    <div className="text-xs text-neutral-500">Вопрос {currentIndex + 1} из {total}</div>
                  </div>
                  <div
                    ref={optionsRef}
                    key={q.id}
                    className="grid content-start gap-3"
                    onTouchStart={(e) => {
                      (e.currentTarget as any)._ts = e.touches[0].clientX;
                    }}
                    onTouchEnd={(e) => {
                      const startX = (e.currentTarget as any)._ts as number | undefined;
                      if (startX == null) return;
                      const dx = e.changedTouches[0].clientX - startX;
                      const threshold = 40;
                      if (dx < -threshold && currentIndex < total - 1) {
                        setDirection(1);
                        setCurrentIndex((i) => Math.min(i + 1, total - 1));
                      } else if (dx > threshold && currentIndex > 0) {
                        setDirection(-1);
                        setCurrentIndex((i) => Math.max(i - 1, 0));
                      }
                    }}
                  >
                    {q.options.map((opt) => (
                      <label
                        key={opt.id}
                        className={`flex items-center gap-3 rounded-md px-4 py-3 border cursor-pointer transition-all ${
                          checkedId === opt.id
                            ? "bg-white shadow-sm border-brand-300"
                            : "bg-white/80 hover:bg-white border-black/10 hover:border-brand-200"
                        }`}
                      >
                        <input
                          type="radio"
                          name={name}
                          value={opt.id}
                          checked={checkedId === opt.id}
                          onChange={() => setAnswers((p) => ({ ...p, [q.id]: opt.id }))}
                          className="accent-brand-600 w-4 h-4"
                        />
                        <span className="text-base md:text-lg font-medium">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              );
            })()}

            <div className="mt-4 flex items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  setAnswers({});
                  setSubmitted(false);
                  setCurrentIndex(0);
                }}
                className="text-sm md:text-base text-neutral-600 hover:text-neutral-900 cursor-pointer"
              >
                Сбросить
              </button>
              <div className="flex-1" />
              {currentIndex < total - 1 ? (
                <button
                  type="button"
                  disabled={!answers[questions[currentIndex].id]}
                  onClick={() => { setDirection(1); setCurrentIndex((i) => Math.min(i + 1, total - 1)); }}
                  className="rounded-lg px-6 py-3.5 bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-600 text-white text-sm md:text-base transition-colors cursor-pointer"
                >
                  Далее
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!answers[questions[currentIndex].id]}
                  className="rounded-lg px-6 py-3.5 bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-600 text-white text-sm md:text-base transition-colors cursor-pointer"
                >
                  Посмотреть результат
                </button>
              )}
            </div>
          </form>
        ) : (
          <div className="rounded-xl ring-1 ring-black/10 bg-white/70 backdrop-blur mb-[68px] p-6 w-full max-w-6xl mx-auto text-center h-[450px] flex flex-col justify-center">
            <div className="text-xl font-semibold">Ваш результат: {score} из {total}</div>
            <div className="text-sm text-neutral-600 mt-1">Правильных ответов: {percent}%</div>
            <div className="mt-4 flex justify-center">
              <button
                className="rounded-lg px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white text-sm md:text-base transition-colors cursor-pointer"
                onClick={() => {
                  setAnswers({});
                  setSubmitted(false);
                  setCurrentIndex(0);
                }}
              >
                Пройти ещё раз
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


