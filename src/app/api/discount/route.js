import { connectDB } from "@/helper/db";
import { getCurrentDate } from "@/helper/utility";
import { Discount } from "@/models/discount";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const currentDateTime = getCurrentDate();
  try {
    const data = await request.json();
    console.log("Data", data);

    (data.createdAt = currentDateTime),
      (data.modifiedAt = ""),
      (data.deletedAt = "");

    const result = new Discount(data);
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

//To get all the discount
export const GET = async () => {
  try {
    const result = await Discount.find();

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({
      message: "Error Occured!! - " + error,
    });
  }
};
