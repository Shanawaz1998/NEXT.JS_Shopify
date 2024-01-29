import { getCurrentDate } from "@/helper/utility";
import mongoose from "mongoose";

// const date = new Date().getTime();
// const offsetTime = new Date().getTimezoneOffset();
// const result = date - offsetTime * 60000;

const result = getCurrentDate();

export const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.ObjectId,
    required: true,
  },
  paymentId: {
    type: mongoose.ObjectId,
    required: true,
  },
  productId: {
    type: mongoose.ObjectId,
    required: true,
  },
  total: {
    type: Number,
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
  modifiedAt: {
    type: Date,
    default: result,
  },
  deletedAt: {
    type: Date,
    default: result,
  },
});

export const Orders =
  mongoose.models.orders || mongoose.model("orders", orderSchema);
