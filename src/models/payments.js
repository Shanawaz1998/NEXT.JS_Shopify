import mongoose from "mongoose";

export const paymentSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.ObjectId,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
  },
  modifiedAt: {
    type: Date,
  },
});

export const Payment =
  mongoose.models.payments || mongoose.model("payments", paymentSchema);
