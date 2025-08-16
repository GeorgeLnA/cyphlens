import React from "react";
import Spline from '@splinetool/react-spline';

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Pure Spline 3D Scene - Full Screen */}
      <div className="absolute inset-0 w-full h-full">
        <Spline scene="https://prod.spline.design/Q5KnbDe3jesS9oeV/scene.splinecode" />
      </div>
    </section>
  );
};
