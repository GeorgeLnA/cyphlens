import React from "react";

export const OverlaySection = (): JSX.Element => {
  return (
    <footer className="relative w-full h-auto md:h-14">
      <div className="flex flex-col md:flex-row justify-center items-center h-full gap-4 md:gap-0 py-4 md:py-0">
        {/* Centered content */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            Cyphlens Security Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};
