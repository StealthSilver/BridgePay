import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function Signup() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async () => {
    if (!form.username || !form.password || !form.firstName || !form.lastName) {
      setError("All fields are required");
      return;
    }
    if (!form.username.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (form.firstName.length < 2 || form.lastName.length < 2) {
      setError("Names must be at least 2 characters");
      return;
    }
    setLoading(true);
    try {
      const res = await API.post("/user/signup", form);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err: any) {
      const errorMsg = err?.response?.data?.message || "Signup failed";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-4">
      <div className="backdrop-blur-xl bg-white/5 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            BridgePay
          </h1>
          <p className="text-gray-400">Create your account to get started</p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-sm">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              className="w-full px-4 py-3 bg-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 transition hover:bg-white/15"
              placeholder="your@email.com"
              name="username"
              type="email"
              value={form.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              First Name
            </label>
            <input
              className="w-full px-4 py-3 bg-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 transition hover:bg-white/15"
              placeholder="John"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Last Name
            </label>
            <input
              className="w-full px-4 py-3 bg-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 transition hover:bg-white/15"
              placeholder="Doe"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              className="w-full px-4 py-3 bg-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 transition hover:bg-white/15"
              type="password"
              placeholder="At least 6 characters"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 disabled:opacity-50 transition font-bold shadow-lg disabled:cursor-not-allowed mt-6"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </div>

        <p className="text-sm mt-6 text-gray-400 text-center">
          Already have an account?{" "}
          <a
            href="/signin"
            className="text-blue-400 hover:text-cyan-300 transition font-medium"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
