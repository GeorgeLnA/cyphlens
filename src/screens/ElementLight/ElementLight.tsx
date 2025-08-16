import React, { useEffect, useState } from "react";
import { HeroSection } from "./sections/HeroSection";
import { NavigationHeaderSection } from "./sections/NavigationHeaderSection";

import { Section02_OurExpertise } from "./sections/Section02_OurExpertise";
import { Section03_CallToAction } from "./sections/Section03_CallToAction";

import { Section09_SectionWrapper } from "./sections/Section09_SectionWrapper";

import { Section11_Footer } from "./sections/Section11_Footer";



export const ElementLight = (): JSX.Element => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setHasMounted(true), 50);
    return () => window.clearTimeout(id);
  }, []);

  const baseReveal = "transition-all duration-700 ease-out will-change-transform";
  const hidden = "opacity-0 translate-y-2";
  const shown = "opacity-100 translate-y-0";

  return (
    <div className="relative w-full bg-white overflow-x-hidden">

      <div className="flex flex-col w-full items-start">
        <div className="relative w-full">
          {/* Floating Navigation Header */}
          <NavigationHeaderSection />

          {/* Hero Section */}
          <HeroSection />



          {/* Main Content Area */}
          <div className="relative w-full bg-white overflow-x-hidden">
            {/* Section 2 — Our Expertise */}
            <div className={`${baseReveal} ${hasMounted ? shown : hidden}`} style={{ transitionDelay: "100ms" }}>
              <Section02_OurExpertise />
            </div>

            {/* Section 3 — Call To Action */}
            <div className={`${baseReveal} ${hasMounted ? shown : hidden}`} style={{ transitionDelay: "150ms" }}>
              <Section03_CallToAction />
            </div>





            {/* Section 9 — Section Wrapper */}
            <div className={`${baseReveal} ${hasMounted ? shown : hidden}`} style={{ transitionDelay: "400ms" }}>
              <Section09_SectionWrapper />
            </div>

            {/* Section 11 — Footer */}
            <div className={`${baseReveal} ${hasMounted ? shown : hidden}`} style={{ transitionDelay: "450ms" }}>
              <Section11_Footer />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};
