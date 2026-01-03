"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple fade-in animation without GSAP
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    const elements = [
      headlineRef.current,
      subheadRef.current,
      ctaRef.current,
      visualRef.current,
    ];
    elements.forEach((el) => el && observer.observe(el));

    return () => {
      elements.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1
              ref={headlineRef}
              className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-gray-900 dark:text-white opacity-0"
              style={{ animation: "fadeInUp 1s ease-out forwards" }}
            >
              <span className="text-gray-900 dark:text-white">
                The Future of{" "}
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Payments
              </span>
              <span className="text-gray-900 dark:text-white"> is Here</span>
            </h1>

            <p
              ref={subheadRef}
              className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 opacity-0"
              style={{ animation: "fadeInUp 1s ease-out 0.2s forwards" }}
            >
              Fast, secure, and borderless transactions powered by cutting-edge
              technology. Send money globally in seconds with enterprise-grade
              security.
            </p>

            <div
              ref={ctaRef}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0"
              style={{ animation: "fadeInUp 1s ease-out 0.4s forwards" }}
            >
              <Link
                href="/signup"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
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
              </Link>
              <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div
              className="mt-12 flex items-center gap-8 justify-center lg:justify-start opacity-0"
              style={{ animation: "fadeInUp 1s ease-out 0.6s forwards" }}
            >
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  150+
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Countries
                </p>
              </div>
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-700" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  $2B+
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Processed
                </p>
              </div>
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-700" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  99.9%
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Uptime
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div
            ref={visualRef}
            className="relative hidden lg:block opacity-0"
            style={{ animation: "fadeInUp 1s ease-out 0.8s forwards" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl" />
              <div className="glass-card p-8 relative bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        BridgePay
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Business Account
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-blue-600 font-medium px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30">
                    Active
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-900/50">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Available Balance
                    </p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                      $124,532.00
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-900/50">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Income
                      </p>
                      <p className="text-lg font-semibold text-blue-600">
                        +$12,430
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-900/50">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Expenses
                      </p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        -$3,240
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
