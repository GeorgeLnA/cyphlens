import React from "react";
import { MainContentSection } from "../MainContentSection";
import { LayoutWrapperSection } from "../LayoutWrapperSection";
import { OverlaySection } from "../OverlaySection";

export const Section11_Footer = (): JSX.Element => {
  return (
    <footer className="flex flex-col w-full items-start pt-4 pb-10" style={{ backgroundColor: '#17030A' }} aria-label="Section 11 — Footer">
      <div className="flex flex-col max-w-[1640px] mx-auto w-full items-end gap-8 md:gap-16 pr-6 md:pr-14 pl-14 md:pl-28 py-0">
        <div className="flex flex-col lg:flex-row w-full items-end justify-center gap-8 lg:gap-0">
          <MainContentSection />
          <LayoutWrapperSection />
        </div>
        <OverlaySection />
      </div>
    </footer>
  );
};

export default Section11_Footer;

