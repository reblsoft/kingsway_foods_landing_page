"use client";
// korkoe
import useActiveSection from "@/hooks/useActiveSection";
import { scrollToSection } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const nav_links = [
    { href: "#home", title: "Home" },
    { href: "#about", title: "About" },
    { href: "#features", title: "Features" },
    { href: "#screenshots", title: "Screenshots" },
    { href: "#testimonials", title: "Testimonials" },
    { href: "#contact", title: "Contact" },
  ];

  const sectionIds = nav_links
    .filter((link) => link.href.startsWith("#"))
    .map((link) => link.href.slice(1));

  const activeSection = useActiveSection(sectionIds);

  const handleSmoothScroll = (e: React.MouseEvent, href: string) => {
    scrollToSection(e, href);
    setMenuOpen(false); // Close the menu after clicking a link
  };

  return (
    <header
      className={`bg-white/50 fixed top-0 z-20 backdrop-blur-md w-full transition-[max-height] duration-300 ease-in-out overflow-hidden ${
        menuOpen ? "max-h-[700px]" : "max-h-28 max-md:max-h-20"
      }`}
    >
      <div className="mx-auto w-11/12 max-w-[1605px] h-20 md:h-28 lg:py-6">
        <div className="relative flex items-center w-full h-full justify-between max-md:py-2.5">
          <img
            src="/images/Logo.svg"
            alt="Logo"
            className="max-w-[110px] max-h-[65px] w-full h-full max-lg:max-w-20"
          />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {nav_links.map((link) => (
              <button
                key={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`text-[15px] font-bold transition-colors duration-200 ${
                  activeSection === link.href.slice(1)
                    ? "bg-linear-to-r from-[#2a7f62] from-29% to-[#31ae83] to-100% text-transparent bg-clip-text"
                    : "text-[#252b33] hover:text-gray-900"
                }`}
              >
                {link.title}
              </button>
            ))}
          </nav>

          {/* Mobile Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-700 hover:text-gray-900 w-full hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              {!menuOpen ? (
                <img src="/icons/menu.svg" alt="Menu" />
              ) : (
                <img src="/icons/close.svg" alt="Close" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - always mounted */}
      <div
        className={`lg:hidden flex flex-col w-full gap-10 px-4 py-4 transition-all duration-300 overflow-hidden
      ${menuOpen ? "opacity-100 max-h-[600px]" : "opacity-0 max-h-0"}
    `}
      >
        {nav_links.map((link) => (
          <button
            key={link.href}
            onClick={(e) => handleSmoothScroll(e, link.href)}
            className={`w-full text-center leading-relaxed font-bold text-base py-2 ${
              activeSection === link.href.slice(1)
                ? "bg-linear-to-r from-[#2a7f62] from-29% to-[#31ae83] to-100% text-transparent bg-clip-text"
                : "text-[#252b33]"
            }`}
          >
            {link.title}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
