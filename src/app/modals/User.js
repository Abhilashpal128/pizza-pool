import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
    },
    image: {
      type: String,
    },
   
  },
  { timestamps: true }
);

export const User = models?.User || model("User", userSchema);
