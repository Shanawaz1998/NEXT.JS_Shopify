import { Product } from "@/models/products";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
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

//Working on product API
//NExt - push on github
