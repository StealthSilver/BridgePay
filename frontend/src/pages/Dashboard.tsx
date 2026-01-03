import { useEffect, useState } from "react";
import API from "../api";
import Navbar from "../components/Navbar";

interface User {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
}

export default function Dashboard() {
  const [balance, setBalance] = useState<number | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [balanceLoading, setBalanceLoading] = useState(true);
  const [usersLoading, setUsersLoading] = useState(true);
  const [transferSuccess, setTransferSuccess] = useState("");

  useEffect(() => {
    fetchBalance();
    fetchUsers();
  }, []);

  const fetchBalance = async () => {
    setBalanceLoading(true);
    try {
      const res = await API.get("/account/balance");
      setBalance(res.data.balance);
    } catch (err: any) {
      console.error("Failed to fetch balance:", err);
      setBalance(null);
    } finally {
      setBalanceLoading(false);
    }
  };

  const fetchUsers = async () => {
    setUsersLoading(true);
    try {
      const res = await API.get("/user/bulk");
      setUsers(res.data.user || []);
    } catch (err: any) {
      console.error("Failed to fetch users:", err);
      setUsers([]);
    } finally {
      setUsersLoading(false);
    }
  };

  const handleTransfer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!to || !amount || Number(amount) <= 0) {
      alert("Please select a recipient and enter a valid amount");
      return;
    }
    setTransferSuccess("");
    setLoading(true);
    try {
      await API.post("/account/transfer", { to, amount: Number(amount) });
      setTransferSuccess("✓ Transfer successful!");
      setAmount("");
      setTo("");
      setTimeout(() => setTransferSuccess(""), 3000);
      fetchBalance();
    } catch (err: any) {
      console.error("Transfer failed:", err);
      const errorMsg = err?.response?.data?.message || "Transfer failed";
      alert(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Navbar />

      <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto space-y-6 sm:space-y-8">
        {/* Balance Card */}
        <div className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-2xl">
          <h2 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 text-gray-400 uppercase tracking-wider">
            Available Balance
          </h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            {balanceLoading ? (
              <span className="animate-pulse">Loading...</span>
            ) : balance !== null ? (
              `₹ ${balance.toFixed(2)}`
            ) : (
              "Error"
            )}
          </p>
        </div>

        {/* Transfer Section */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-2xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send Money</h2>

          {transferSuccess && (
            <div className="mb-4 p-3 sm:p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300 text-sm sm:text-base">
              {transferSuccess}
            </div>
          )}

          <form onSubmit={handleTransfer} className="flex flex-col gap-4 sm:gap-5">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                Recipient
              </label>
              <select
                value={to}
                onChange={(e) => setTo(e.target.value)}
                required
                disabled={usersLoading}
                className="w-full p-2 sm:p-3 bg-white/10 text-white rounded-lg sm:rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition hover:bg-white/15 disabled:opacity-50"
              >
                <option value="">
                  {usersLoading ? "Loading users..." : "Select recipient"}
                </option>
                {users.map((user) => (
                  <option
                    key={user._id}
                    value={user._id}
                    className="text-black"
                  >
                    {user.firstName} {user.lastName} ({user.username})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                Amount (₹)
              </label>
              <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                step="0.01"
                min="1"
                className="w-full p-2 sm:p-3 bg-white/10 text-white rounded-lg sm:rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 transition hover:bg-white/15"
              />
            </div>

            <button
              type="submit"
              disabled={loading || usersLoading}
              className="w-full py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 disabled:opacity-50 transition font-bold shadow-lg disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : "Transfer"}
            </button>
          </form>
        </div>

        {/* Users List */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-2xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Users Directory</h2>

          {usersLoading ? (
            <div className="text-center py-6 sm:py-8 text-gray-400">
              <p className="animate-pulse text-sm sm:text-base">Loading users...</p>
            </div>
          ) : users.length === 0 ? (
            <div className="text-center py-6 sm:py-8 text-gray-400">
              <p className="text-sm sm:text-base">No users available</p>
            </div>
          ) : (
            <div className="grid gap-2 sm:gap-3">
              {users.map((user) => (
                <div
                  key={user._id}
                  className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 sm:gap-0 p-3 sm:p-4 bg-white/5 border border-white/5 rounded-lg hover:bg-white/10 hover:border-white/20 transition"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm sm:text-base truncate">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400 truncate">{user.username}</p>
                  </div>
                  <button
                    onClick={() => {
                      setTo(user._id);
                      (
                        document.querySelector(
                          "input[type='number']"
                        ) as HTMLInputElement | null
                      )?.focus();
                    }}
                    className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-blue-600/30 hover:bg-blue-600/50 border border-blue-500/30 rounded-lg text-xs sm:text-sm font-medium transition"
                  >
                    Send
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
