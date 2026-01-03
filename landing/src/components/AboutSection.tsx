"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "top 35%",
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
            stagger: 0.25,
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

  const features = [
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Bank-Grade Security",
      description:
        "256-bit encryption with multi-factor authentication to protect every transaction",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
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
      title: "Lightning Fast",
      description:
        "Transactions complete in under 3 seconds globally with zero delays",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
          />
        </svg>
      ),
      title: "Global Reach",
      description:
        "Operate seamlessly in 150+ countries with full local compliance",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-28 lg:py-40 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute -bottom-1/2 left-1/3 w-96 sm:w-[500px] md:w-[600px] h-96 sm:h-[500px] md:h-[600px] bg-accent/5 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
          {/* Left Content */}
          <div ref={contentRef} className="px-2 sm:px-0">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-primary tracking-wide uppercase">
                About Bridge Pay
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-6 sm:mt-8 text-foreground leading-tight">
              Building Trust in
              <span className="gradient-text block mt-2"> Digital Finance</span>
            </h2>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Bridge Pay was founded with a singular vision: to make global
              payments as simple as sending a message. We believe financial
              infrastructure should be invisible, instant, and accessible to
              everyone.
            </p>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Our platform processes billions of dollars annually, serving
              businesses from startups to Fortune 500 companies. With
              enterprise-grade security and a developer-first approach, we are
              redefining what is possible in digital payments.
            </p>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-10">
              <button className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-primary/20 to-accent/10 border border-primary/40 hover:border-primary/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
                <span className="text-sm sm:text-base font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                  Learn More About Us
                </span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
              </button>
            </div>
          </div>

          {/* Right Feature Cards */}
          <div ref={cardsRef} className="grid gap-6 sm:gap-7">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group glass-card p-7 sm:p-8 flex items-start gap-6 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 cursor-pointer overflow-hidden relative"
              >
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />

                {/* Icon Container */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center text-primary flex-shrink-0 group-hover:from-primary/40 group-hover:to-accent/30 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
                  {feature.icon}
                </div>

                {/* Text Content */}
                <div className="relative z-10">
                  <h3 className="font-bold text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-muted-foreground group-hover:text-muted-foreground transition-colors duration-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
