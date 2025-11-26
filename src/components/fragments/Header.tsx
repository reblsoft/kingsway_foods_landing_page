"use client";

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
    { href: "#screenshot", title: "Screenshot" },
    { href: "#testimonials", title: "Testimonials" },
    { href: "#contact", title: "Contact" },
  ];

  const sectionIds = nav_links
    .filter((link) => link.href.startsWith("#"))
    .map((link) => link.href.slice(1));

  const activeSection = useActiveSection(sectionIds);

  const handleSmoothScroll = (e: React.MouseEvent, href: string) => {
    scrollToSection(e, href);
    setMenuOpen(false);
  };

  return (
    <header className="bg-white/50 border-b border-gray-100 sticky top-0 z-10 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">

          {/* Logo */}
          <img src="/images/Logo.svg" alt="Logo" className="h-8 w-auto" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {nav_links.map((link) => (
              <button
                key={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`
                  text-sm font-medium transition-colors duration-200 
                  ${
                    activeSection === link.href.slice(1)
                      ? "text-green-600"
                      : "text-gray-700 hover:text-gray-900"
                  }
                `}
              >
                {link.title}
              </button>
            ))}
          </nav>

          {/* Desktop Right Icons */}
          <div className="hidden md:flex items-center space-x-2">
            <a
              href="/collections/all"
              className="p-2 cursor-pointer text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
              aria-label="Search"
            ></a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              {/* Insert hamburger icon here */}
              {/* Example: <Menu className="w-6 h-6" /> */}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4">
          {nav_links.map((link) => (
            <button
              key={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className={`
                block w-full text-left text-gray-700 text-base py-2
                ${
                  activeSection === link.href.slice(1)
                    ? "text-green-600 font-medium"
                    : "hover:text-gray-900"
                }
              `}
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
