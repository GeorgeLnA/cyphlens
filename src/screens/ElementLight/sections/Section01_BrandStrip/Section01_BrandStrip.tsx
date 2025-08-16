import React, { useEffect, useRef, useState } from "react";

type BrandItem = {
  text: string;
};

const brands: BrandItem[] = [
  { text: "AIT" },
  { text: "FWL" },
  { text: "XTRM" },
  { text: "CYPHLENS" },
  { text: "FINTECH" },
  { text: "HEALTHCARE" },
];

export const Section01_BrandStrip = (): JSX.Element => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const seqRef = useRef<HTMLUListElement | null>(null);
  const seq2Ref = useRef<HTMLUListElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const offsetRef = useRef<number>(0);
  const pausedRef = useRef<boolean>(false);
  const halfWidthRef = useRef<number>(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let mounted = true;
    const speedPxPerSecond = 60; // tune for smoothness

    const recalc = () => {
      const base = seqRef.current?.scrollWidth ?? 0;
      const ml = seq2Ref.current ? parseFloat(getComputedStyle(seq2Ref.current).marginLeft || "0") : 0;
      halfWidthRef.current = base + ml;
    };

    recalc();

    const handleResize = () => {
      // throttle with rAF
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(() => {
          recalc();
          rafRef.current = null;
        });
      }
    };

    window.addEventListener("resize", handleResize);

    const tick = (ts: number) => {
      if (!mounted) return;
      if (lastTsRef.current == null) {
        lastTsRef.current = ts;
      }
      const dt = Math.min(48, ts - lastTsRef.current);
      lastTsRef.current = ts;

      if (!pausedRef.current) {
        offsetRef.current += (speedPxPerSecond * dt) / 1000;
        const loopWidth = halfWidthRef.current;
        if (loopWidth > 0 && offsetRef.current >= loopWidth) {
          offsetRef.current -= loopWidth;
        }
        setOffset(offsetRef.current);
      }

      requestAnimationFrame(tick);
    };

    const id = requestAnimationFrame(tick);

    return () => {
      mounted = false;
      cancelAnimationFrame(id);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = null;
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative w-full border-y border-fuchsia-200/20 bg-gradient-to-r from-purple-50 to-fuchsia-50" aria-label="Section 1 — Brand Strip">
      <div
        className="relative w-full overflow-hidden py-4 md:py-5 group"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
      >
        {/* Left and right fade overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-purple-50/90 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-fuchsia-50/90 to-transparent" />

        {/* Track driven by rAF */}
        <div
          ref={trackRef}
          className="flex items-center transform-gpu [will-change:transform]"
          style={{ transform: `translate3d(-${offset}px,0,0)` }}
        >
          {/* First sequence */}
          <ul ref={seqRef} className="flex items-center gap-16 md:gap-24">
            {brands.map((brand, idx) => (
              <li key={`seq1-${idx}`} className="shrink-0">
                <span className="logo cursor-target h-8 md:h-10 flex items-center text-slate-600 font-semibold text-3xl md:text-4xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-fuchsia-600 hover:scale-105">
                  {brand.text}
                </span>
              </li>
            ))}
          </ul>
          {/* Second sequence (duplicate for seamless loop) with larger explicit gap before start */}
          <ul ref={seq2Ref} className="flex items-center gap-16 md:gap-24 ml-56 md:ml-72" aria-hidden="true">
            {brands.map((brand, idx) => (
              <li key={`seq2-${idx}`} className="shrink-0">
                <span className="logo cursor-target h-8 md:h-10 flex items-center text-slate-600 font-semibold text-3xl md:text-4xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-fuchsia-600 hover:scale-105">
                  {brand.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Section01_BrandStrip;

