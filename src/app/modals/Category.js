const { Timestamp } = require("mongodb");
const { Schema, models, model } = require("mongoose");

const CategorySchema = new Schema(
  {
    name: {
      type: "string",
      required: true,
    },
  },
  { Timestamp: true }
);

export const Category = models?.Category || model("Category", CategorySchema);
