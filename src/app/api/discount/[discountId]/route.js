import { connectDB } from "@/helper/db";
import { getCurrentDate } from "@/helper/utility";
import { Discount } from "@/models/discount";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  try {
    const discountId = await params.discountId;
    await Discount.findByIdAndDelete(discountId);

    return NextResponse.json({
      message: "Discount Deleted",
    });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({
      message: "Error Occured!! - " + error,
    });
  }
};

export const PUT = async (request, { params }) => {
  try {
    const currentDateTime = getCurrentDate();
    const discountId = params.discountId;
    const data = await request.json();
    const discountDetails = await Discount.findById(discountId);

    (discountDetails.discountName = data.discountName),
      (discountDetails.discountDesc = data.discountDesc),
      (discountDetails.discountPercent = data.discountPercent),
      (discountDetails.discountName = data.discountActive),
      (discountDetails.modifiedAt = currentDateTime);

    const result = new Discount(discountDetails);
    await result.save();

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
