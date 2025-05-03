"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const mobileMenuRef = useRef(null);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobile &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobile]);

  const menuItems = [
    { name: "Home", href: "/home" },
    { name: "AI", href: "/login" },
    { name: "Join", href: "/login" },
    { name: "Creator", href: "/login" },
    { name: "Login", href: "/login" },
    { name: "Signup", href: "/signup" },
  ];

  return (
    <header className="z-50 sticky top-0 bg-gray-800 text-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <img
            src="/assets/quiz.jpeg"
            alt="Logo"
            className="w-12 rounded-full"
          />
          <span className="font-sans text-3xl">
            <Link href={"/home"}>Quizard</Link>
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6 text-xl">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-gray-400">
              {item.name}
            </a>
          ))}
        </nav>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={() => setMobile(!mobile)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-2/3 bg-[#17172ba6] backdrop-blur-md p-6 text-white z-40 transform transition-transform duration-500 ease-in-out ${
          mobile ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMobile(false)}
          className="text-2xl mb-6 self-end focus:outline-none"
          aria-label="Close menu"
        >
          ✕
        </button>
        <nav className="flex flex-col space-y-4 text-xl">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobile(false)} // Close on link click
              className="hover:text-gray-400"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Background overlay (optional) */}
      {mobile && (
        <div
          className="fixed inset-0 bg-black/40 z-30"
          onClick={() => setMobile(false)}
        ></div>
      )}
    </header>
  );
}
