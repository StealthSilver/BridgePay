import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import bridgepayLogo from "../assets/bridgepay_main.svg";

export default function Navbar() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setMobileMenuOpen(false);
    navigate("/signin");
  };

  return (
    <nav className="backdrop-blur-xl bg-gradient-to-r from-black/50 to-gray-900/50 border-b border-blue-400/20 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/dashboard"
            className="flex items-center gap-2 hover:opacity-80 transition flex-shrink-0"
          >
            <img
              src={bridgepayLogo}
              alt="BridgePay Logo"
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-4 md:gap-6">
            <Link
              to="/dashboard"
              className="text-gray-300 hover:text-white transition font-medium py-2 px-3 md:px-4 rounded-lg hover:bg-white/10 text-sm md:text-base"
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 md:px-6 py-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:opacity-90 transition font-semibold shadow-md text-white text-sm md:text-base"
            >
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-4 pt-4 border-t border-white/10 space-y-2">
            <Link
              to="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-300 hover:text-white transition font-medium py-2 px-3 rounded-lg hover:bg-white/10"
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="w-full text-left px-3 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-500 hover:opacity-90 transition font-semibold text-white"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
