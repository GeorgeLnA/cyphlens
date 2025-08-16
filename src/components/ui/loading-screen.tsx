import React, { useState, useEffect, useRef } from "react";

type LoadingScreenProps = {
  loop?: boolean;
  onComplete?: () => void;
};

const LoadingScreen: React.FC<LoadingScreenProps> = ({ loop = false, onComplete }) => {
  const [letterStep, setLetterStep] = useState(0);
  const [exitProgress, setExitProgress] = useState(0); // 0 -> 1
  const [scaleProgress, setScaleProgress] = useState(0);
  const rafIdRef = useRef<number | null>(null);

  const letters = ["C", "y", "p", "h", "l", "e", "n", "s"];

  useEffect(() => {
    let loopTimer: number | null = null;
    let completeTimer: number | null = null;

    const startCurtainExit = () => {
      const durationMs = 900; // smooth, quick handoff
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / durationMs);
        setExitProgress(progress);
        if (progress < 1) {
          rafIdRef.current = requestAnimationFrame(step);
        } else {
          onComplete?.();
        }
      };

      rafIdRef.current = requestAnimationFrame(step);
    };

    const runAnimation = () => {
      setLetterStep(0);
      setExitProgress(0);
      setScaleProgress(0);

      // Start scale animation
      setTimeout(() => setScaleProgress(1), 200);

      // Animate letters with staggered timing
      letters.forEach((_, i) => setTimeout(() => setLetterStep(i + 1), 400 + i * 120));

      const totalDuration = 400 + letters.length * 120 + 800; // scale + letters + buffer

      if (loop) {
        loopTimer = window.setTimeout(runAnimation, totalDuration);
      } else {
        // After sequence, perform curtain-up exit once
        completeTimer = window.setTimeout(() => {
          startCurtainExit();
        }, totalDuration);
      }
    };

    runAnimation();

    return () => {
      if (loopTimer) window.clearTimeout(loopTimer);
      if (completeTimer) window.clearTimeout(completeTimer);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [loop, onComplete]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[9998]"
      style={{
        backgroundColor: '#17030A',
        transform: `translate3d(0, -${exitProgress * 100}%, 0)`,
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
    >
      <div className="relative w-80 h-20">
        {/* Main container with scale animation */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: `scale(${scaleProgress})`,
            transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          {/* cyphlens text with modern animation */}
          <div className="text-3xl font-light tracking-widest text-white">
            {letters.map((letter, i) => (
              <span
                key={i}
                className={`inline-block transition-all duration-300 ${
                  letterStep > i 
                    ? "opacity-100 translate-y-0 scale-100" 
                    : "opacity-0 translate-y-4 scale-75"
                }`}
                style={{
                  transitionDelay: `${i * 50}ms`,
                  transform: letterStep > i 
                    ? "translateY(0) scale(1)" 
                    : "translateY(1rem) scale(0.75)"
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;