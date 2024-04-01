const { Schema, models, model } = require("mongoose");

const OrderSchena = new Schema(
  {
    userEmail: {
      type: String,
    },
    phone: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    pinCode: {
      type: String,
    },
    streetAddress: {
      type: String,
    },
    cartProducts: {
      type: Object,
    },
    paid: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Orders = models?.Orders || model("Orders", OrderSchena);
