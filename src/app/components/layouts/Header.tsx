"use client";
import { memo, useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../../assets/logo1.png";

const LinkItems = [
  { href: "/", text: "Home" },
  { href: "/menu", text: "Menu" },
  { href: "/chat", text: "Chat" },
];

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = LinkItems.findIndex((item) => item.href === pathname);
    if (activeIndex !== -1 && itemRefs.current[activeIndex] && navRef.current) {
      const item = itemRefs.current[activeIndex];
      const nav = navRef.current;
      setIndicatorStyle({
        left: item!.offsetLeft,
        width: item!.offsetWidth,
      });
    }
  }, [pathname]);

  const handleHover = (index: number) => {
    const item = itemRefs.current[index];
    if (item) {
      setIndicatorStyle({ left: item.offsetLeft, width: item.offsetWidth });
    }
  };

  const handleMouseLeave = () => {
    const activeIndex = LinkItems.findIndex((item) => item.href === pathname);
    if (activeIndex !== -1 && itemRefs.current[activeIndex]) {
      const item = itemRefs.current[activeIndex];
      setIndicatorStyle({ left: item!.offsetLeft, width: item!.offsetWidth });
    }
  };

  return (
    <header className="flex w-full  items-center justify-between px-6 md:px-10 py-3 bg-white sticky top-0 z-50">
      {/* Logo */}
      <Image
        src={logo}
        alt="Logo"
        width={100}
        height={100}
        className="object-contain"
      />

      {/* Desktop Nav */}
      <ul
        ref={navRef}
        className="relative hidden md:flex gap-1 bg-gray-950/75  rounded-2xl px-2 py-2 text-white"
        onMouseLeave={handleMouseLeave}
      >
        {/* Sliding indicator */}
        <span
          className="absolute top-2 bottom-2 bg-white/20 rounded-xl transition-all duration-300 ease-in-out pointer-events-none"
          style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
        />

        {LinkItems.map((item, index) => (
          <li
            key={item.href}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            onMouseEnter={() => handleHover(index)}
            className="relative z-10"
          >
            <Link
              href={item.href}
              className={`block px-4 py-1.5 rounded-xl text-sm font-medium transition-colors duration-200 ${
                pathname === item.href
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Button */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white border-b shadow-lg md:hidden transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        <ul className="flex flex-col px-6 py-4 gap-2">
          {LinkItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-gray-950 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default memo(Header);
