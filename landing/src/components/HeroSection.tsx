"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const bgGlowsRef = useRef<HTMLDivElement[]>([]);

  const handleGetStarted = () => {
    window.open("https://bridge-pay-chi.vercel.app/", "_blank");
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Advanced headline animation with staggered text
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 80, rotateX: -20 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1.2 }
      )
        .fromTo(
          subheadRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.7"
        )
        .fromTo(
          ctaRef.current ? Array.from(ctaRef.current.children) : [],
          { opacity: 0, y: 40, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.2 },
          "-=0.5"
        )
        .fromTo(
          visualRef.current,
          { opacity: 0, scale: 0.85, rotateY: -40, z: -100 },
          { opacity: 1, scale: 1, rotateY: 0, z: 0, duration: 1.3 },
          "-=1"
        );

      // Animate background glows
      bgGlowsRef.current.forEach((glow, index) => {
        gsap.to(glow, {
          y: index % 2 === 0 ? -20 : 20,
          opacity: index % 2 === 0 ? 0.4 : 0.3,
          duration: 4 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Card hover animation with enhanced effects
      if (cardRef.current) {
        cardRef.current.addEventListener("mouseenter", () => {
          gsap.to(cardRef.current, {
            y: -15,
            boxShadow: "0 40px 80px rgba(42, 216, 206, 0.4)",
            duration: 0.4,
            ease: "power2.out",
          });
        });
        cardRef.current.addEventListener("mouseleave", () => {
          gsap.to(cardRef.current, {
            y: 0,
            boxShadow: "0 20px 50px rgba(42, 216, 206, 0.2)",
            duration: 0.4,
            ease: "power2.out",
          });
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden perspective"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 hero-glow" />

      {/* Primary Glow Orb */}
      <div
        ref={(el) => {
          if (el) bgGlowsRef.current[0] = el;
        }}
        className="absolute top-1/3 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl"
      />

      {/* Secondary Glow Orb */}
      <div
        ref={(el) => {
          if (el) bgGlowsRef.current[1] = el;
        }}
        className="absolute bottom-1/3 right-1/4 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-gradient-to-tl from-accent/15 to-accent/5 rounded-full blur-3xl"
      />

      {/* Tertiary Glow Orb */}
      <div
        ref={(el) => {
          if (el) bgGlowsRef.current[2] = el;
        }}
        className="absolute -bottom-1/2 left-1/3 w-96 sm:w-[500px] md:w-[600px] h-96 sm:h-[500px] md:h-[600px] bg-gradient-to-tr from-primary/10 via-transparent to-transparent rounded-full blur-3xl opacity-40"
      />

      {/* Grid Background Pattern - subtle */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left px-2 sm:px-0">
            <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm animate-fade-in-scale">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-primary">
                Transforming Global Payments
              </span>
            </div>

            <h1
              ref={headlineRef}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance"
            >
              <span className="text-foreground">The Future of </span>
              <span className="gradient-text">Payments</span>
              <span className="text-foreground"> is Here</span>
            </h1>

            <p
              ref={subheadRef}
              className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Fast, secure, and borderless transactions powered by cutting-edge
              technology. Send money globally in seconds with enterprise-grade
              security.
            </p>

            <div
              ref={ctaRef}
              className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Button variant="cta" size="xl" onClick={handleGetStarted}>
                Get Started
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
              <Button variant="heroOutline" size="xl">
                Learn More
              </Button>
            </div>

            {/* Stats Section */}
            <div className="mt-12 sm:mt-16 flex flex-wrap items-center gap-6 sm:gap-8 md:gap-10 justify-center lg:justify-start">
              <div
                className="text-center animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
                  150+
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Countries
                </p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-primary/30 to-accent/30" />
              <div
                className="text-center animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
                  $2B+
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Processed
                </p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-primary/30 to-accent/30" />
              <div
                className="text-center animate-slide-up"
                style={{ animationDelay: "0.6s" }}
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
                  99.9%
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Uptime
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual - Card */}
          <div
            ref={visualRef}
            className="relative hidden lg:block h-96 md:h-[450px]"
          >
            <div className="relative h-full">
              {/* Background gradient blur */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-accent/15 to-accent/25 rounded-3xl blur-3xl animate-subtle-float" />

              {/* Main Card */}
              <div
                ref={cardRef}
                className="glass-card p-8 relative h-full flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-primary/50 backdrop-blur-lg border border-primary/30"
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Card Header */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      {/* Animated User Avatar */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-60 animate-pulse-glow" />
                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg border-2 border-primary/40">
                          <svg
                            className="w-9 h-9 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="font-bold text-lg text-foreground">
                          Bridge Pay
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Business Account
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-white font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg">
                      Active
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="space-y-6">
                    {/* Balance Card */}
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary/70 to-secondary/40 border border-primary/20 backdrop-blur-md hover:border-primary/60 transition-all duration-300 animate-card-fade-in group cursor-pointer hover:shadow-lg hover:shadow-primary/20">
                      <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">
                        Available Balance
                      </p>
                      <p className="text-4xl font-black text-foreground mt-3 group-hover:text-primary transition-colors duration-300">
                        $124,532.00
                      </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-primary/25 to-primary/10 border border-primary/40 backdrop-blur-sm hover:border-primary/70 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 animate-card-fade-in-delayed-1 group cursor-pointer">
                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                          Income
                        </p>
                        <p className="text-2xl font-bold text-primary mt-2 group-hover:scale-110 transition-transform duration-300">
                          +$12,430
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-gradient-to-br from-accent/25 to-accent/10 border border-accent/40 backdrop-blur-sm hover:border-accent/70 transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 animate-card-fade-in-delayed-2 group cursor-pointer">
                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                          Expenses
                        </p>
                        <p className="text-2xl font-bold text-accent mt-2 group-hover:scale-110 transition-transform duration-300">
                          -$3,240
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Orbs */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/15 rounded-full blur-2xl -mr-16 -mt-16 animate-pulse-glow" />
                <div
                  className="absolute bottom-0 left-0 w-24 h-24 bg-accent/15 rounded-full blur-2xl -ml-12 -mb-12 animate-pulse-glow"
                  style={{ animationDelay: "1s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
