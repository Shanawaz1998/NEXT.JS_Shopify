import { Product } from "@/models/products";
import { NextResponse } from "next/server";

export const GET = async ({ params }) => {
  try {
    const productId = params.productId;
    const result = await Product.findById(productId);

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

//Deleting product
export const DELETE = async (request, { params }) => {
  try {
    const productId = params.productId;
    const result = await Product.findByIdAndDelete(productId);
    return NextResponse.json({
      message: "Product Deleted Successfully",
    });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({
      message: "Error Occured!! - " + error,
    });
  }
};

//Updating product
export const PUT = async (request, { params }) => {
  try {
    const productId = params.productId;
    const data = await request.json();
    console.log("Data", data);
    return NextResponse.json({
      message: "Product Updated",
    });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({
      message: "Error Occured!! - " + error,
    });
  }
};
