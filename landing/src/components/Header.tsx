"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <Image
            src="/bridgepay_main.svg"
            alt="BridgePay Logo"
            width={120}
            height={120}
            className="w-36 h-16"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 group"
            >
              <span className="relative z-10">{link.name}</span>
              {/* Animated underline */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              {/* Glow effect on hover */}
              <span className="absolute -inset-2 rounded-lg bg-gradient-to-r from-primary/0 via-primary/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:inline-flex relative group overflow-hidden"
            onClick={handleSignIn}
          >
            <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
              Sign In
            </span>
            {/* Animated background on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
          </Button>
          <Button variant="cta" size="sm" onClick={handleSignIn}>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
