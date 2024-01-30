import { Payment } from "@/models/payments";
import { NextResponse } from "next/server";

//To add the new payment
export const POST = async (request) => {
  try {
    const data = await request.json();
    const newPayment = new Payment(data);
    await newPayment.save();

    return NextResponse.json(newPayment, {
      status: 201,
    });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({
      message: "Error Occured!! - " + error,
    });
  }
};

//To get all the payments
export const GET = async () => {
  try {
    const result = await Payment.find();

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
