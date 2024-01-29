import mongoose from "mongoose";

const date = new Date().getTime();
const offsetTime = new Date().getTimezoneOffset();
const result = date - offsetTime * 60000;

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

export const Discount =
  mongoose.models.discount || mongoose.model("discount", discountSchema);
