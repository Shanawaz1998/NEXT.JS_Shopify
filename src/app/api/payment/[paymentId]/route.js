import { Payment } from "@/models/payments";
import { NextResponse } from "next/server";

//To get the payment in the payment ID
export const GET = async (request, { params }) => {
  try {
    const paymentId = params.paymentId;
    const result = await Payment.findById(paymentId);

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

//To delete the payment
export const DELETE = async (request, { params }) => {
  try {
    const paymentId = params.paymentId;
    await Payment.findByIdAndDelete(paymentId);

    return NextResponse.json({
      message: "Payment Delete",
    });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({
      message: "Error Occured!! - " + error,
    });
  }
};
