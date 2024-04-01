const { Schema, models, model } = require("mongoose");

const UserInfoSchema = new Schema(
  {
    email: { type: String, required: true },
    phone: { type: String },
    streetAddress: { type: String },
    pinCode: { type: String },
    city: { type: String },
    country: { type: String },
    admin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const UserInfo = models?.UserInfo || model("UserInfo", UserInfoSchema);
