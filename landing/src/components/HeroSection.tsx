"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleGetStarted = () => {
    window.open("https://bridge-pay-chi.vercel.app/", "_blank");
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1 }
      )
        .fromTo(
          subheadRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current ? Array.from(ctaRef.current.children) : [],
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
          "-=0.4"
        )
        .fromTo(
          visualRef.current,
          { opacity: 0, scale: 0.9, rotateY: -30 },
          { opacity: 1, scale: 1, rotateY: 0, duration: 1 },
          "-=0.8"
        );

      // Card hover animation
      if (cardRef.current) {
        cardRef.current.addEventListener("mouseenter", () => {
          gsap.to(cardRef.current, {
            y: -10,
            boxShadow: "0 30px 60px rgba(42, 216, 206, 0.3)",
            duration: 0.3,
          });
        });
        cardRef.current.addEventListener("mouseleave", () => {
          gsap.to(cardRef.current, {
            y: 0,
            boxShadow: "0 8px 32px 0 hsla(222, 47%, 5%, 0.4)",
            duration: 0.3,
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
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1
              ref={headlineRef}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance"
            >
              <span className="text-foreground">The Future of </span>
              <span className="gradient-text">Payments</span>
              <span className="text-foreground"> is Here</span>
            </h1>

            <p
              ref={subheadRef}
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0"
            >
              Fast, secure, and borderless transactions powered by cutting-edge
              technology. Send money globally in seconds with enterprise-grade
              security.
            </p>

            <div
              ref={ctaRef}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="cta" size="xl" onClick={handleGetStarted}>
                Get Started
                <svg
                  className="w-5 h-5"
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

            <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold gradient-text">
                  150+
                </p>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold gradient-text">
                  $2B+
                </p>
                <p className="text-sm text-muted-foreground">Processed</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold gradient-text">
                  99.9%
                </p>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
            </div>
          </div>

          <div ref={visualRef} className="relative hidden lg:block h-96">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-3xl animate-card-float" />
              <div
                ref={cardRef}
                className="glass-card p-8 relative h-full flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-primary/40"
              >
                {/* Animated gradient border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none animate-gradient-shift" />

                {/* Header with User Icon */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      {/* User Icon */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur opacity-75 animate-pulse" />
                        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-foreground">
                          Bridge Pay
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Business Account
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-white font-medium px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg">
                      Active
                    </span>
                  </div>

                  {/* Balance Section */}
                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary/60 to-secondary/30 border border-border/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 animate-card-fade-in">
                      <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                        Available Balance
                      </p>
                      <p className="text-4xl font-black text-foreground mt-2">
                        $124,532.00
                      </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 backdrop-blur-sm hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-card-fade-in-delayed-1">
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                          Income
                        </p>
                        <p className="text-xl font-bold text-primary mt-1">
                          +$12,430
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 backdrop-blur-sm hover:border-accent/60 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 animate-card-fade-in-delayed-2">
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                          Expenses
                        </p>
                        <p className="text-xl font-bold text-accent mt-1">
                          -$3,240
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-16 -mt-16 animate-pulse" />
                <div
                  className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl -ml-12 -mb-12 animate-pulse"
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
