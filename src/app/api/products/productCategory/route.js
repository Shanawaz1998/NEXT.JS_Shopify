import { connectDB } from "@/helper/db";
import { ProductCategory } from "@/models/productCategory";
import { NextResponse } from "next/server";

await connectDB();

//To add the product categories
export const POST = async (request) => {
  try {
    const data = await request.json();
    const result = new ProductCategory(data);
    await result.save();
    console.log("Data", data);
    return NextResponse.json({
      message: "Product category added",
    });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({
      message: "Error Occured!! - " + error,
    });
  }
};

//To get all the product categories
export const GET = async (request) => {
  try {
    const result = await ProductCategory.find();
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
