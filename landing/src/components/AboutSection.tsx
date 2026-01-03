"use client";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About BridgePay
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're revolutionizing the way people and businesses transfer money
            globally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose BridgePay?
            </h3>
            <ul className="space-y-4">
              {[
                "Instant global transfers",
                "Industry-leading security",
                "Competitive exchange rates",
                "24/7 customer support",
                "Easy integration",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Our Mission
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  To make international payments as simple and affordable as
                  sending an email.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Our Vision
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  A world where money flows freely, without borders or barriers.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Founded
                </h4>
                <p className="text-gray-600 dark:text-gray-300">2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
