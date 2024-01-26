import mongoose from "mongoose";

const date = new Date().getTime();
const offsetTime = new Date().getTimezoneOffset();
const result = date - offsetTime * 60000;

export const productSchema = new mongoose.Schema({
  categoryId: {
    type: mongoose.ObjectId,
    required: true,
  },
  discountId: {
    type: mongoose.ObjectId,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productDesc: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productImgs: {
    type: Array,
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

export const Product =
  mongoose.models.products || mongoose.model("products", productSchema);
