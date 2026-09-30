"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type NavLink = {
  href: string;
  label: string;
  id: string;
};

const LINKS: NavLink[] = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#about", label: "About", id: "about" },
  { href: "#menu", label: "Menu", id: "menu" },
  { href: "#franchise", label: "Franchise", id: "franchise" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const router = useRouter();

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (let i = LINKS.length - 1; i >= 0; i--) {
        const section = document.getElementById(LINKS[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(LINKS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      // Section exists on current page — smooth scroll
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${targetId}`);
      setActiveSection(targetId);
    } else {
      // Section not on current page — navigate to home page with hash
      router.push(`/#${targetId}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex h-17 max-w-6xl items-center justify-between px-4">
        {/* =====================================================
            LOGO
        ===================================================== */}
        <Link
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex h-16 w-[220px] items-center overflow-hidden"
        >
          <Image
            src="/logo-text.png"
            alt="Vidarbha Cha Vadewala"
            width={1983}
            height={793}
            priority
            className="
              h-[82px]
              w-auto
              max-w-none
              scale-[1.15]
              object-contain
            "
          />
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}
        <nav className="hidden items-center gap-1 lg:gap-2 md:flex">
          {LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`
                  rounded-full
                  px-3.5
                  py-1.5
                  font-body
                  text-sm
                  font-semibold
                  tracking-wide
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "bg-turmeric/15 text-turmeric shadow-[0_0_12px_rgba(232,163,61,0.2)]"
                      : "text-papad-dim hover:bg-white/5 hover:text-turmeric"
                  }
                `}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="
            flex
            h-10
            w-10
            flex-col
            items-center
            justify-center
            gap-1.5
            rounded-full
            border
            border-white/15
            transition-colors
            hover:border-turmeric/50
            md:hidden
          "
        >
          <span
            className={`h-0.5 w-5 bg-papad transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-5 bg-papad transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-5 bg-papad transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}
      {open && (
        <nav className="border-t border-white/10 bg-ink px-5 pb-5 md:hidden">
          {LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/5
                  py-3
                  font-body
                  text-sm
                  font-semibold
                  tracking-wide
                  transition-colors
                  ${
                    isActive
                      ? "text-turmeric font-bold"
                      : "text-papad-dim hover:text-turmeric"
                  }
                `}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-turmeric" />
                )}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}