const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Pricing", "API Docs", "Integrations"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Blog", "Press"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Security", "Compliance"],
    },
  ];

  return (
    <footer className="border-t border-primary/20 bg-gradient-to-b from-card/50 to-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-16 mb-12 sm:mb-16">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <a href="#home" className="flex items-center gap-3 flex-wrap group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-primary-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="font-display text-lg sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                Bridge Pay
              </span>
            </a>
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-muted-foreground max-w-xs leading-relaxed">
              Modern payment infrastructure for global businesses. Fast, secure,
              and infinitely scalable.
            </p>
          </div>

          {/* Links Sections */}
          {footerLinks.map((group, index) => (
            <div
              key={group.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <h4 className="font-bold text-foreground mb-4 sm:mb-6 text-sm sm:text-base hover:text-primary transition-colors duration-300">
                {group.title}
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-all duration-300 group/link inline-flex items-center gap-1.5"
                    >
                      <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                        {link}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider with gradient */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8 sm:mb-12" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © 2024 Bridge Pay. All rights reserved. | Built with modern
            technologies
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="https://x.com/silver_srs"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 text-muted-foreground hover:text-primary"
              title="Twitter"
              aria-label="Follow on Twitter"
            >
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="https://github.com/StealthSilver"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 text-muted-foreground hover:text-primary"
              title="GitHub"
              aria-label="View on GitHub"
            >
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/rajat-saraswat-0491a3259/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 text-muted-foreground hover:text-primary"
              title="LinkedIn"
              aria-label="Connect on LinkedIn"
            >
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
