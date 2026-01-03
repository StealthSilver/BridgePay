"use client";

const ServicesSection = () => {
  const services = [
    {
      icon: "💳",
      title: "International Transfers",
      description:
        "Send money to 150+ countries with our fast and secure transfer system.",
    },
    {
      icon: "🔐",
      title: "Enterprise Security",
      description:
        "Bank-level encryption and compliance with international standards.",
    },
    {
      icon: "📱",
      title: "Mobile App",
      description:
        "Manage your finances on the go with our intuitive mobile application.",
    },
    {
      icon: "⚡",
      title: "Instant Settlements",
      description:
        "Get your money settled in real-time with our advanced infrastructure.",
    },
    {
      icon: "💰",
      title: "Low Fees",
      description:
        "Competitive rates with no hidden charges. Transparent pricing always.",
    },
    {
      icon: "🌍",
      title: "Multi-Currency",
      description: "Support for 50+ currencies with real-time exchange rates.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need for seamless global payments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
