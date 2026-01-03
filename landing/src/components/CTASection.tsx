"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleStartTrial = () => {
    window.open("https://bridge-pay-chi.vercel.app", "_blank");
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="py-20 sm:py-28 lg:py-40 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div
          ref={containerRef}
          className="relative rounded-3xl sm:rounded-4xl overflow-hidden"
        >
          {/* Animated Background Layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_hsl(187,100%,42%)/20,_transparent)] mix-blend-screen" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(187,100%,42%)/25,_transparent)] mix-blend-overlay" />

          {/* Animated glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 sm:w-96 md:w-[700px] h-80 sm:h-96 md:h-[700px] bg-primary/30 rounded-full blur-3xl opacity-60 animate-pulse-glow" />
          <div
            className="absolute -bottom-1/3 -right-1/4 w-96 sm:w-[500px] md:w-[600px] h-96 sm:h-[500px] md:h-[600px] bg-accent/20 rounded-full blur-3xl opacity-40"
            style={{ animationDelay: "1s" }}
          />

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, hsl(var(--primary)), transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 sm:px-12 md:px-20 py-16 sm:py-24 md:py-32 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Ready to Transform Your
                <span className="gradient-text block mt-3 sm:mt-4">
                  {" "}
                  Payment Infrastructure
                </span>
              </h2>

              <p className="mt-8 sm:mt-10 text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Join thousands of businesses already using Bridge Pay to process
                payments faster, safer, and more efficiently. Start scaling
                globally today.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
                <Button
                  variant="cta"
                  size="xl"
                  onClick={handleStartTrial}
                  className="font-semibold shadow-lg shadow-primary/40 hover:shadow-primary/60 transition-all duration-300"
                >
                  Start Free Trial
                  <svg
                    className="w-5 h-5 ml-2"
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
                </Button>
                <Button
                  variant="heroOutline"
                  size="xl"
                  className="font-semibold"
                >
                  Talk to Sales
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-3 group hover:text-primary transition-colors duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="font-medium">No credit card</span>
                </div>
                <div className="flex items-center gap-3 group hover:text-primary transition-colors duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="font-medium">14-day free trial</span>
                </div>
                <div className="flex items-center gap-3 group hover:text-primary transition-colors duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="font-medium">Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
