import { connectDB } from "@/helper/db";
import { Product } from "@/models/products";
import { NextResponse } from "next/server";

await connectDB();

//To Add products
export const POST = async (request) => {
  try {
    const data = await request.json();
    const result = new Product(data);
    await result.save();
    console.log("Data", data);
    return NextResponse.json({
      message: "Product Added",
    });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({
      message: "Error Occured!! - " + error,
    });
  }
};

//To get all the products
export const GET = async () => {
  try {
    const result = await Product.find();
    console.log("Result", result);
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
