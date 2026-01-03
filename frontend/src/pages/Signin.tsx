import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function Signin() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrorMsg("");
  };

  const handleSubmit = async () => {
    if (!form.username || !form.password) {
      setErrorMsg("Email and password are required");
      return;
    }
    setLoading(true);
    setErrorMsg("");
    try {
      const res = await API.post("/user/signin", form);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err: any) {
      console.error("Signin error:", err);
      const serverMsg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err.message;
      setErrorMsg(serverMsg || "Signin failed");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-4">
      <div className="backdrop-blur-xl bg-white/5 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            BridgePay
          </h1>
          <p className="text-gray-400">Welcome back</p>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-sm">
            {errorMsg}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              className="w-full px-4 py-3 bg-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 transition hover:bg-white/15"
              placeholder="your@email.com"
              name="username"
              type="email"
              value={form.username}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <input
              className="w-full px-4 py-3 bg-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 transition hover:bg-white/15"
              type="password"
              placeholder="Enter your password"
              name="password"
              value={form.password}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 disabled:opacity-50 transition font-bold shadow-lg disabled:cursor-not-allowed mt-6"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </div>

        <p className="text-sm mt-6 text-gray-400 text-center">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-400 hover:text-cyan-300 transition font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
