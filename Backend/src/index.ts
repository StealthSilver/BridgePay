import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import rootRouter from "./routes/index";

const app = express();

// Enable CORS with proper configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://bridge-pay.vercel.app",
    ],
    credentials: true,
  })
);

// Parse JSON with explicit limits
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use("/api/v1", rootRouter);

// Global error handling middleware
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error("Error:", err);
    res.status(500).json({
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
);

const MONGO_URL =
  process.env.MONGO_URL || "mongodb://localhost:27017/bridgepay";

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(8000, () => {
      console.log("Server running on http://localhost:8000");
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
