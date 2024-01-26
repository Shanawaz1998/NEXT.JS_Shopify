import { connectDB } from "@/helper/db";
import { UserAddress } from "@/models/userAddress";

const { NextResponse } = require("next/server");
// http://localhost:3000/api/user/userId/userAddress

export const POST = async (request, { params }) => {
  await connectDB();
  try {
    const userId = params.userId;
    const data = await request.json();
    data.userId = userId;
    const result = new UserAddress(data);
    await result.save();

    return NextResponse.json({
      message: "User Address added",
    });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({
      message: "User not found" + error,
    });
  }
};

export const GET = async (request, { params }) => {
  try {
    const userId = params.userId;
    const result = await UserAddress.find({ userId: userId });
    return NextResponse.json(result, {
      status: 201,
    });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({
      message: "User not found" + error,
    });
  }
};
