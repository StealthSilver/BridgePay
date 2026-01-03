import express from "express";
import mongoose from "mongoose";
import { authMiddleware } from "../middleware";
import { Account } from "../db";

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
  try {
    const account = await Account.findOne({ userId: req.userId });

    if (!account) {
      return res.status(404).json({ error: "Account not found" });
    }

    res.json({ balance: account.balance });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});
router.post("/transfer", authMiddleware, async (req, res) => {
  try {
    const { amount, to } = req.body;

    // Validate input
    if (!amount || !to) {
      return res
        .status(400)
        .json({ message: "Amount and recipient are required" });
    }

    if (typeof amount !== "number" || amount <= 0) {
      return res.status(400).json({ message: "Amount must be greater than 0" });
    }

    if (!mongoose.Types.ObjectId.isValid(to)) {
      return res.status(400).json({ message: "Invalid recipient ID" });
    }

    // Prevent self-transfer
    if (req.userId?.toString() === to) {
      return res.status(400).json({ message: "Cannot transfer to yourself" });
    }

    const fromAccount = await Account.findOne({ userId: req.userId });
    if (!fromAccount) {
      return res.status(404).json({ message: "Your account not found" });
    }

    if (fromAccount.balance < amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    const toAccount = await Account.findOne({ userId: to });
    if (!toAccount) {
      return res.status(400).json({ message: "Recipient account not found" });
    }

    // Update balances atomically
    await Account.updateOne(
      { userId: req.userId },
      { $inc: { balance: -amount } }
    );
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } });

    res.json({ message: "Transfer successful" });
  } catch (err: any) {
    console.error("Transfer error:", err);
    res.status(500).json({ message: "Transfer failed", error: err.message });
  }
});

export default router;
