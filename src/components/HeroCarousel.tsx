import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { HERO_IMAGES } from "@/lib/data";

const AUTOPLAY_MS = 6000;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const total = HERO_IMAGES.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, next]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Subtle parallax on scroll
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const slide = HERO_IMAGES[index];

  return (
    <section
      ref={wrapRef}
      aria-roledescription="carousel"
      aria-label="Présentation BETAREX"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative h-[calc(100svh-5rem)] min-h-[620px] w-full overflow-hidden bg-ink text-bone"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              width={1920}
              height={1280}
              className="h-full w-full object-cover opacity-80"
              fetchPriority={index === 0 ? "high" : "auto"}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/45 to-ink/95" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Click-through layer to navigate slide */}
      <Link
        to={slide.to as "/services" | "/projects"}
        aria-label={`Découvrir : ${slide.title}`}
        className="absolute inset-0 z-[5]"
      />

      <motion.div style={{ opacity }} className="relative z-10 flex h-full flex-col justify-end pointer-events-none">
        <div className="container-x pb-14 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 text-bone"
          >
            <span className="h-px w-12 bg-clay" />
            <span className="eyebrow text-bone">Cabinet d'architecture · Kinshasa, RDC · Depuis 2016</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-[18ch] font-display text-[clamp(2.75rem,8.5vw,9rem)] leading-[0.92] tracking-[-0.04em] text-bone"
          >
            Bâtir un avenir <em className="not-italic text-clay">durable</em>, par l'architecture.
          </motion.h1>

          <div className="mt-10 grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="max-w-xl text-base md:text-lg text-bone/90 leading-relaxed"
            >
              BETAREX accompagne institutions, entreprises et particuliers dans la conception, l'évaluation
              et la réalisation de leurs projets — en République Démocratique du Congo et à l'international.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              className="pointer-events-auto flex flex-wrap items-center gap-4"
            >
              <Link to="/projects" className="inline-flex items-center gap-3 rounded-full bg-clay px-7 py-4 text-xs uppercase tracking-[0.2em] text-bone hover:bg-bone hover:text-ink transition-colors">
                Voir les projets <span aria-hidden>→</span>
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-3 border-b border-bone pb-2 text-xs uppercase tracking-[0.2em] text-bone hover:text-clay hover:border-clay transition-colors">
                Nous contacter
              </Link>
            </motion.div>
          </div>

          {/* Slide caption */}
          <div className="mt-10 flex flex-wrap items-baseline justify-between gap-4 border-t border-bone/20 pt-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={`caption-${index}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5 }}
              >
                <span className="font-mono text-[0.7rem] uppercase tracking-widest text-clay">{slide.tag}</span>
                <span className="ml-4 font-display text-xl md:text-2xl text-bone">{slide.title}</span>
              </motion.div>
            </AnimatePresence>
            <span className="font-mono text-[0.7rem] uppercase tracking-widest text-bone/70">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Prev / Next controls */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-between px-3 md:px-6">
        <button
          type="button"
          onClick={prev}
          aria-label="Image précédente"
          className="pointer-events-auto grid h-12 w-12 md:h-14 md:w-14 place-items-center rounded-full border border-bone/40 bg-ink/30 text-bone backdrop-blur-md hover:bg-clay hover:border-clay transition-colors"
        >
          <span aria-hidden className="text-xl">←</span>
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Image suivante"
          className="pointer-events-auto grid h-12 w-12 md:h-14 md:w-14 place-items-center rounded-full border border-bone/40 bg-ink/30 text-bone backdrop-blur-md hover:bg-clay hover:border-clay transition-colors"
        >
          <span aria-hidden className="text-xl">→</span>
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute inset-x-0 bottom-4 z-20 flex justify-center gap-3">
        {HERO_IMAGES.map((s, i) => (
          <button
            key={s.title}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Aller à la slide ${i + 1} : ${s.title}`}
            aria-current={i === index}
            className={`group h-1.5 overflow-hidden rounded-full bg-bone/30 transition-all ${i === index ? "w-10 bg-clay" : "w-6 hover:bg-bone/60"}`}
          />
        ))}
      </div>
    </section>
  );
}
