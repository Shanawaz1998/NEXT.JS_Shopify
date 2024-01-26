import mongoose from "mongoose";

const date = new Date().getTime();
const offsetTime = new Date().getTimezoneOffset();
const result = date - offsetTime * 60000;

export const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.ObjectId,
    required: true,
  },
  productId: {
    type: Array,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: result,
  },
  updatedAt: {
    type: Date,
    default: result,
  },
});

export const Cart = mongoose.models.cart || mongoose.model("cart", cartSchema);
