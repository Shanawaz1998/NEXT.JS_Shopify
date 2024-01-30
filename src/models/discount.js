import mongoose from "mongoose";

export const discountSchema = new mongoose.Schema({
  discountName: {
    type: String,
    required: true,
  },
  discountDesc: {
    type: String,
    required: true,
  },
  discountPercent: {
    type: Number,
    required: true,
  },
  discountActive: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
  },
  modifiedAt: {
    type: Date,
  },
  deletedAt: {
    type: Date,
  },
});

export const Discount =
  mongoose.models.discount || mongoose.model("discount", discountSchema);
