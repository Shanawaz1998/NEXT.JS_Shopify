import { getCurrentDate } from "@/helper/utility";
import mongoose from "mongoose";

const date = new Date().getTime();
const offsetTime = new Date().getTimezoneOffset();
const result = date - offsetTime * 60000;

// const result = getCurrentDate();

export const productCategorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  categoryDesc: {
    type: String,
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

export const ProductCategory =
  mongoose.models.productCategory ||
  mongoose.model("productCategory", productCategorySchema);
