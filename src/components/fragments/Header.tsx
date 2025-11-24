"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useActiveSection from "@/hooks/useActiveSection";
import { scrollToSection } from "@/lib/utils";
import Logo from "@/assets/icons/Logo";
import Menu from "@/assets/icons/Menu";
import { X } from "lucide-react";

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
    <>
      <header
        className={`lg:w-full lg:px-[153px] lg:flex mx-auto overflow-hidden z-50 
    transition-[height,border-radius] ease-in-out
    ${
      menuOpen
        ? "max-lg:h-[330px] max-lg:rounded-[29px] duration-[500ms,0ms] delay-[0ms,0ms] backdrop-blur-sm"
        : "max-lg:h-14 duration-[500ms,700ms] delay-[0ms,500ms] backdrop-blur-xs"
    }`}
      >
        <div className="flex items-center mx-auto w-full lg:justify-between ">
          {/* Left: Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="lg:hidden text-[#059C1B] relative z-50"
          >
            {menuOpen ? <X size={32}/> : <Menu />}
          </button>

          {/* Middle: Logo */}
          <div className="flex items-center">
            <Logo />
            {/* <span className="lg:text-lg font-bold">Lift Credits</span> */}
          </div>

          {/* Desktop Nav */}
          <nav className="max-lg:hidden">
            <ul className="flex gap-8">
              {nav_links.map((link, i) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : link.href.slice(1) === activeSection;

                return (
                  <li key={`NL-${i}`}>
                    <Link
                      href={link.href}
                      scroll={false}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className={`font-bold text-base transition-colors duration-300 hover:text-[#059C1B] ${
                        isActive ? "text-[#059C1B]" : "text-[#252b33]"
                      }`}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTA Button */}
          {/* <button
            className="bg-[#059C1B] text-white flex items-center justify-center gap-2 w-10 h-10 lg:w-[183px] lg:h-[50px] rounded-full text-[15px] font-medium hover:shadow"
            onClick={(e) => handleSmoothScroll(e, "#waitlist")}
          >
            <span className="max-lg:hidden">Join Waitlist</span>
            <RocketIcon size={15} />
          </button> */}
        </div>
        {/* Mobile Menu Overlay */} {/* Mobile Menu Panel */}
        <nav
          className={`p-6 w-[95%] transition-all ease-in-out text-center mx-auto lg:hidden ${
            menuOpen ? "opacity-100" : "opacity-0 pointer-events-none delay-200"
          }`}
        >
          <ul className="flex flex-col gap-5">
            {nav_links.map((link, i) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : link.href.slice(1) === activeSection;

              return (
                <li key={`MNL-${i}`}>
                  <Link
                    href={link.href}
                    scroll={false}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className={`block text-lg font-semibold transition-colors duration-200 ${
                      isActive ? "text-[#059C1B]" : "text-black/70"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <div
        className={`fixed top-0 left-0 w-full h-full ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none hidden"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>
    </>
  );
};

export default Header;