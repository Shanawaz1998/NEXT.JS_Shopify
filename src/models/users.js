import mongoose from "mongoose";

const date = new Date().getTime();
const offsetTime = new Date().getTimezoneOffset();
const result = date - offsetTime * 60000;

export const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username Required from model !!"],
    },
    password: {
      type: String,
      required: [true, "Password Required from model !!"],
    },
    firstName: {
      type: String,
      required: [true, "FirstName Required from model !!"],
    },
    lastName: {
      type: String,
      required: [true, "LastName Required from model !!"],
    },
    mobileNo: {
      type: Number,
      required: [true, "Mobile no. Required from model !!"],
    },
    dob: {
      type: String,
      required: [true, "DOB is Required from model !!"],
    },
    createdAt: {
      type: Date,
      default: result,
    },
    updatedAt: {
      type: Date,
      default: result,
    },
  }
  // {
  //   timestamps= true,
  // }
);

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
