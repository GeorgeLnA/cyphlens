import { ChevronDownIcon, Home, Briefcase, Users, FileText, MessageSquare, Phone } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { useRef, useState } from "react";

export const NavigationHeaderSection = (): JSX.Element => {
  const navItems = [
    { name: "Home", icon: Home, hasDropdown: false, aria: "Go to Home" },
    { name: "Products", icon: Briefcase, hasDropdown: true, aria: "View Products" },
    { name: "Dashboard", icon: FileText, hasDropdown: false, aria: "Dashboard" },
    { name: "About", icon: Users, hasDropdown: false, aria: "About Us" },
    { name: "Contact Us", icon: Phone, hasDropdown: false, aria: "Contact Us" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const handleEnter = (): void => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setIsOpen(true);
  };

  const handleLeave = (): void => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
    }
    closeTimer.current = window.setTimeout(() => setIsOpen(false), 180);
  };

  return (
    <header className="fixed top-1/2 -translate-y-1/2 left-4 md:left-8 z-50 select-none">
      <nav
        role="navigation"
        aria-label="Primary"
        className="relative overflow-visible"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onFocusCapture={handleEnter}
        onBlurCapture={(e) => {
          if (!(e.currentTarget as HTMLElement).contains(e.relatedTarget as Node)) {
            setIsOpen(false);
          }
        }}
      >
        {/* Fixed left side background (half width) */}
        <div className="absolute left-0 top-0 w-8 h-full rounded-l-[64px] border-l border-t border-b border-fuchsia-200/20 shadow-lg pointer-events-none backdrop-blur-md" style={{ backgroundColor: '#17030A' }} />
        
        {/* Expanding right side background */}
        <div 
          className="absolute left-8 top-0 h-full border-t border-b border-r border-fuchsia-200/20 shadow-lg transition-all duration-300 ease-linear backdrop-blur-md"
          style={{ 
            backgroundColor: '#17030A',
            width: isOpen ? "10rem" : "2rem",
            borderTopRightRadius: isOpen ? "32px" : "28px",
            borderBottomRightRadius: isOpen ? "32px" : "28px"
          }}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        />

        {/* Content */}
        <ul className="relative z-10 flex flex-col items-start gap-5 py-4 px-0">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li
                key={index}
                className="group relative h-16 w-16"
              >
                <Button
                  aria-label={item.aria}
                  variant="ghost"
                  size="icon"
                  className="w-16 h-16 leading-none flex items-center justify-center text-white hover:text-fuchsia-200 hover:scale-110 transition-all duration-200 group-hover:text-fuchsia-200 group-hover:scale-110 focus-visible:ring-0 hover:bg-transparent group-hover:bg-transparent [&>svg:first-child]:!size-7"
                >
                  <Icon aria-hidden="true" />
                  {/* Label container positioned to the right of the rail */}
                  <span className="absolute left-16 top-1/2 -translate-y-1/2 drop-shadow-lg pointer-events-none">
                    <span
                      className={`block font-semibold text-base whitespace-nowrap overflow-hidden transition-[max-width,opacity] duration-300 ease-linear ${isOpen ? "max-w-[12rem] opacity-100" : "max-w-0 opacity-0"}`}
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDownIcon className="ml-2 inline w-4 h-4 align-[-2px] transition-transform duration-200 group-hover:rotate-180" aria-hidden="true" />
                      )}
                    </span>
                  </span>
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
