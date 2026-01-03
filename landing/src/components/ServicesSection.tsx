"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      if (cardsRef.current) {
        gsap.fromTo(
          Array.from(cardsRef.current.children),
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Instant Payments",
      description:
        "Process payments in real-time with sub-second confirmation. No waiting, no delays.",
      highlight: "< 3 sec",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "Secure Transactions",
      description:
        "Enterprise-grade encryption with PCI DSS Level 1 compliance and fraud detection.",
      highlight: "256-bit SSL",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Global Transfers",
      description:
        "Send and receive money in 50+ currencies across 150+ countries seamlessly.",
      highlight: "150+ Countries",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: "Developer APIs",
      description:
        "Comprehensive REST APIs with SDKs in all major languages. Build faster.",
      highlight: "99.9% Uptime",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/4 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6">
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-2 sm:px-0"
        >
          <span className="text-primary font-medium text-xs sm:text-sm tracking-wider uppercase">
            Our Services
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 text-foreground">
            Everything You Need to
            <span className="gradient-text"> Scale Globally</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground">
            Powerful tools and infrastructure designed for modern businesses.
            From startups to enterprises, we have got you covered.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 group hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <span className="text-xs font-semibold text-primary tracking-wider">
                  {service.highlight}
                </span>

                <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mt-2">
                  {service.title}
                </h3>

                <p className="mt-2 sm:mt-3 text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
