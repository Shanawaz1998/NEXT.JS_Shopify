import { connectDB } from "@/helper/db";
import { User } from "@/models/users";
import { connect } from "mongoose";
import { useAmp } from "next/amp";
import { NextResponse } from "next/server";

// await connectDB();

//To get the single user
export const GET = async (request, { params }) => {
  try {
    const userId = params.userId;
    const result = await User.findById(userId);

    return NextResponse.json(result, {
      message: "User found!!!",
      status: 201,
    });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({
      message: "User not found!!!" + error,
    });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const userId = params.userId;
    const result = await User.findByIdAndDelete(userId);
    console.log("User Deleted", result);

    return NextResponse.json({
      message: "User Deleted successfully",
      status: 201,
    });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({
      message: "User Not found" + error,
    });
  }
};

export const PUT = async (request, { params }) => {
  const userId = params.userId;
  const { username, firstName, lastName, mobileNo, dob } = await request.json();
  try {
    const result = await User.findById(userId);
    (result.username = username),
      (result.firstName = firstName),
      (result.lastName = lastName),
      (result.mobileNo = mobileNo),
      (result.dob = dob);
    const updatedResult = new User(result);
    await updatedResult.save();

    console.log("Result", result.username);
    return NextResponse.json({
      message: "User Updated!!!",
    });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({
      message: "Error Occured!!" + error,
    });
  }
};
