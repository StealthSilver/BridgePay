import express from "express";
import zod from "zod";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User, Account } from "../db";
import { JWT_SECRET } from "../config";
import { authMiddleware } from "../middleware";

const router = express.Router();
const signupBody = zod.object({
  username: zod.string().email("Please provide a valid email"),
  firstName: zod.string().min(2, "First name must be at least 2 characters"),
  lastName: zod.string().min(2, "Last name must be at least 2 characters"),
  password: zod.string().min(6, "Password must be at least 6 characters"),
});

router.post("/signup", async (req, res) => {
  try {
    const { success, error } = signupBody.safeParse(req.body);
    if (!success) {
      console.log("Signup validation failed:", error);
      return res.status(411).json({
        message: "Invalid input: email must be valid, all fields required",
        details: error?.issues || [],
      });
    }

    const existingUser = await User.findOne({
      username: req.body.username,
    });

    if (existingUser) {
      return res.status(411).json({
        message: "Email already taken",
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await User.create({
      username: req.body.username,
      password: hashedPassword,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
    const userId = user._id;

    await Account.create({
      userId,
      balance: 1 + Math.random() * 10000,
    });

    const token = jwt.sign(
      {
        userId: userId.toString(),
      },
      JWT_SECRET
    );

    res.json({
      message: "User created successfully",
      token: token,
    });
  } catch (err: any) {
    console.error("Signup error:", err);
    res.status(500).json({
      message: "Error creating user",
      error: err.message,
    });
  }
});

const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

router.post("/signin", async (req, res) => {
  try {
    const { success, error } = signinBody.safeParse(req.body);
    if (!success) {
      console.log("Signin validation failed:", error);
      return res.status(411).json({
        message: "Invalid email or password format",
        details: error?.issues || [],
      });
    }

    const user = await User.findOne({
      username: req.body.username,
    });

    if (!user) {
      return res.status(411).json({
        message: "Error while logging in",
      });
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (isPasswordValid) {
      const token = jwt.sign(
        {
          userId: user._id.toString(),
        },
        JWT_SECRET
      );

      res.json({
        token: token,
      });
      return;
    }

    res.status(411).json({
      message: "Error while logging in",
    });
  } catch (err: any) {
    console.error("Signin error:", err);
    res.status(500).json({
      message: "Error during signin",
      error: err.message,
    });
  }
});

const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

router.put("/", authMiddleware, async (req, res) => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Error while updating information",
    });
  }

  const updateData: any = { ...req.body };

  // Hash password if it's being updated
  if (updateData.password) {
    updateData.password = await bcrypt.hash(updateData.password, 10);
  }

  await User.updateOne({ _id: req.userId }, { $set: updateData });

  res.json({
    message: "Updated successfully",
  });
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

export default router;
