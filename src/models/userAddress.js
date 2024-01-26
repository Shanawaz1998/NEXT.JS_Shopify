import mongoose from "mongoose";

export const userAddressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.ObjectId,
    required: true,
  },
  addressLine1: {
    type: String,
    required: [true, "Address first line is required"],
  },
  addressLine2: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: Number,
    required: true,
  },
});

export const UserAddress =
  mongoose.models.userAddress ||
  mongoose.model("userAddress", userAddressSchema);
