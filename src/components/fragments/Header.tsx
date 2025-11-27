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
      className={`bg-white/50 sticky top-0 z-10 backdrop-blur-2xl transition-[height,border-radius] ease-in-out
      ${
        menuOpen
          ? "bg-red-300"
          : "bg-blue-300"
      }`}
    >
      <div className="w-full px-4 lg:py-6 sm:px-6 lg:px-[156px]">
        <div className="relative flex items-center w-full justify-between h-16 max-md:py-2.5 max-md:px-6">
          {/* Logo */}
          <img
            src="/images/Logo.svg"
            alt="Logo"
            className="max-w-[110px] max-h-[65px] w-full h-full max-md:max-w-[64px] max-md:max-h-10"
          />
{/* 0205555305 */}
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {nav_links.map((link) => (
              <button
                key={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`text-[15px] font-bold transition-colors duration-200 ${
                  activeSection === link.href.slice(1)
                    ? "bg-linear-to-r from-[#2a7f62] from-29% to-[#31ae83] to-100% text-transparent bg-clip-text"
                    : "text-[#252b33] cursor-pointer hover:text-gray-900"
                }`}
              >
                {link.title}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-700 hover:text-gray-900 w-full hover:bg-gray-50 rounded-lg transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              {/* Show hamburger icon when menu is closed, close icon when open */}
              {!menuOpen ? (
                <img src="/icons/menu.svg" alt="Menu" />
              ) : (
                <img src="/icons/close.svg" alt="Close" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden transition-all ease-in-out flex-col flex w-full gap-10   backdrop-blur-sm border-gray-100 px-4 py-4 space-y-4">
          {nav_links.map((link) => (
            <button
              key={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className={`w-full text-center leading-relaxed font-bold text-gray-700 text-base py-2 ${
                activeSection === link.href.slice(1)
                  ? "bg-linear-to-r from-[#2a7f62] from-29% to-[#31ae83] to-100% text-transparent bg-clip-text"
                  : "text-[#252b33]"
              }`}
            >
              {link.title}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
