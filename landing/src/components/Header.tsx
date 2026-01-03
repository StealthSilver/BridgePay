"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#cta" },
  ];

  const handleSignIn = () => {
    window.open("https://bridge-pay-chi.vercel.app/", "_blank");
  };

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-2xl border-b border-primary/20 py-3 sm:py-4 shadow-lg shadow-primary/5"
          : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo with subtle animation */}
        <a
          href="#home"
          className="flex items-center gap-2 flex-shrink-0 group relative"
        >
          <div
            className={`transition-all duration-500 ${
              scrolled ? "scale-75" : "scale-100"
            }`}
          >
            <Image
              src="/bridgepay_main.svg"
              alt="BridgePay Logo"
              width={120}
              height={120}
              className="w-24 sm:w-28 md:w-36 h-auto group-hover:opacity-80 transition-opacity duration-300"
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="relative z-10">{link.name}</span>
              {/* Animated underline with gradient */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-primary via-accent to-primary group-hover:w-full transition-all duration-500 rounded-full" />
              {/* Glow effect on hover */}
              <span className="absolute -inset-3 rounded-lg bg-linear-to-r from-primary/0 via-primary/20 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:inline-flex relative group overflow-hidden text-xs sm:text-sm font-medium"
            onClick={handleSignIn}
          >
            <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
              Sign In
            </span>
            {/* Animated background on hover */}
            <span className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/15 to-accent/0 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
          </Button>
          <Button
            variant="cta"
            size="sm"
            onClick={handleSignIn}
            className="text-xs sm:text-sm px-3 sm:px-4 font-medium shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
          >
            Get Started
          </Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 group-hover:text-primary transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu with animation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-primary/20 mt-2 animate-slide-down">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 py-3 px-4 rounded-lg animate-slide-up"
                onClick={handleMobileNavClick}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
