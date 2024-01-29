import { Orders } from "@/models/orders";
import { NextResponse } from "next/server";

export const POST = async (request, { params }) => {
  try {
    const data = await request.json();

    const result = new Orders(data);
    await result.save();
    console.log("Data", data);
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
