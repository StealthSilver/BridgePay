import { Link, useNavigate } from "react-router-dom";
import bridgepayLogo from "../assets/bridgepay_main.svg";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <nav className="backdrop-blur-xl bg-gradient-to-r from-black/50 to-gray-900/50 border-b border-blue-400/20 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/dashboard"
          className="flex items-center gap-3 hover:opacity-80 transition"
        >
          <img
            src={bridgepayLogo}
            alt="BridgePay Logo"
            className="h-10 w-auto"
          />
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/dashboard"
            className="text-gray-300 hover:text-white transition font-medium py-2 px-4 rounded-lg hover:bg-white/10"
          >
            Dashboard
          </Link>
          <button
            onClick={handleLogout}
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:opacity-90 transition font-semibold shadow-md text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
