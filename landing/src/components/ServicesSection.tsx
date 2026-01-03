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
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      if (cardsRef.current) {
        gsap.fromTo(
          Array.from(cardsRef.current.children),
          { opacity: 0, y: 80, scale: 0.9, rotateY: -20 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateY: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
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
          className="w-9 h-9"
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
        "Process payments in real-time with sub-second confirmation. Lightning-fast settlement.",
      highlight: "< 3 sec",
      color: "from-primary/25 to-primary/5",
      borderColor: "border-primary/40",
    },
    {
      icon: (
        <svg
          className="w-9 h-9"
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
        "Enterprise-grade encryption with PCI DSS Level 1 compliance and advanced fraud detection.",
      highlight: "256-bit SSL",
      color: "from-accent/25 to-accent/5",
      borderColor: "border-accent/40",
    },
    {
      icon: (
        <svg
          className="w-9 h-9"
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
        "Send and receive money in 50+ currencies across 150+ countries with instant conversion.",
      highlight: "150+ Countries",
      color: "from-primary/20 via-accent/15 to-primary/10",
      borderColor: "border-primary/35",
    },
    {
      icon: (
        <svg
          className="w-9 h-9"
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
        "Comprehensive REST APIs with SDKs in all major languages. Build and scale faster.",
      highlight: "99.9% Uptime",
      color: "from-accent/20 to-accent/5",
      borderColor: "border-accent/35",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 sm:py-28 lg:py-40 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute -top-1/2 right-1/4 w-96 sm:w-[500px] md:w-[600px] h-96 sm:h-[500px] md:h-[600px] bg-accent/8 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-1/3 w-80 sm:w-96 md:w-[500px] h-80 sm:h-96 md:h-[500px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <div
          ref={headerRef}
          className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 lg:mb-24 px-2 sm:px-0"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-accent tracking-wide uppercase">
              Our Services
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-6 sm:mt-8 text-foreground leading-tight">
            Everything You Need to
            <span className="gradient-text block mt-2"> Scale Globally</span>
          </h2>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Powerful tools and infrastructure designed for modern businesses.
            From startups to enterprises, we have everything you need to
            succeed.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`group glass-card p-8 sm:p-9 hover:${service.borderColor} transition-all duration-500 relative overflow-hidden backdrop-blur-lg border border-border/30 hover:shadow-xl hover:shadow-primary/20 cursor-pointer`}
            >
              {/* Animated gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0`}
              />

              {/* Floating accent element */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center text-primary mb-6 sm:mb-7 group-hover:from-primary/40 group-hover:to-accent/30 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 shadow-lg">
                  {service.icon}
                </div>

                {/* Highlight Badge */}
                <span className="inline-block text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                  {service.highlight}
                </span>

                {/* Title */}
                <h3 className="font-bold text-xl sm:text-2xl text-foreground mt-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 sm:mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed group-hover:text-muted-foreground transition-colors duration-300">
                  {service.description}
                </p>

                {/* CTA Arrow */}
                <div className="mt-5 sm:mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                  <span className="text-sm font-semibold">Learn more</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
