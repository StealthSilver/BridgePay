import mongoose, { Schema, Document, Model } from "mongoose";

interface IUser extends Document {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}

const userSchema: Schema<IUser> = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minlength: 3,
    maxlength: 30,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
});

export const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

interface IAccount extends Document {
  userId: mongoose.Types.ObjectId;
  balance: number;
}

const accountSchema: Schema<IAccount> = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

export const Account: Model<IAccount> = mongoose.model<IAccount>(
  "Account",
  accountSchema
);
