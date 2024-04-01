const { Schema, models, model, default: mongoose } = require("mongoose");

const ExtrPrice = new Schema({
  name: String,
  price: Number,
});

const MenuItemsSchema = new Schema({
  image: {
    type: "string",
  },
  name: {
    type: "string",
  },
  description: {
    type: "string",
  },
  category: {
    type: mongoose.Types.ObjectId,
  },
  basePrice: {
    type: "string",
  },
  sizes: { type: [ExtrPrice] },
  extrsIngredientPrices: { type: [ExtrPrice] },
});

export const MenuItem = models?.MenuItem || model("MenuItem", MenuItemsSchema);
