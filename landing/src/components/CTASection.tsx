"use client";

import Link from "next/link";

const CTASection = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of users who trust BridgePay for their global
            payments. Start your free account today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Create Free Account
            </Link>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
