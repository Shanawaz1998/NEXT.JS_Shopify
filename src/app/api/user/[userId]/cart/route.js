import { connectDB } from "@/helper/db";
import { Cart } from "@/models/cart";
import { NextResponse } from "next/server";

// http://localhost:3000/api/user/userId/cart

export const POST = async (request, { params }) => {
  await connectDB();
  try {
    const uuserId = params.userId;
    const data = await request.json();
    data.userId = uuserId;
    const result = new Cart(data);
    await result.save();
    return NextResponse.json({
      message: "Cart Added",
    });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({
      message: "Error Occured!! - " + error,
    });
  }
};

export const GET = async (request, { params }) => {
  try {
    const userId = params.userId;
    const result = await Cart.find({ userId: userId });
    return NextResponse.json(result, {
      status: 201,
    });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({
      message: "Error Occured!! - " + error,
    });
  }
};
