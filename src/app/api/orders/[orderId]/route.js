import { connectDB } from "@/helper/db";
import { Orders } from "@/models/orders";
import { NextResponse } from "next/server";

//To get the orders detail on orderID
export const GET = async (request, { params }) => {
  try {
    const orderId = params.orderId;
    const result = await Orders.findById(orderId);
    console.log("result", result);
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

//To delete the order
export const DELETE = async (request, { params }) => {
  try {
    const orderId = params.orderId;
    const result = await Orders.findByIdAndDelete(orderId);
    console.log("result", result);
    return NextResponse.json({
      message: "Order deleted",
    });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({
      message: "Error Occured!! - " + error,
    });
  }
};

//To update the order
export const PUT = async (request, { params }) => {
  try {
    const orderId = params.orderId;
    const data = await request.json();
    const orderDetails = await Orders.findById(orderId);

    (orderDetails.total = data.total), (orderDetails.quantity = data.quantity);
    console.log("Data", data);

    const updatedOrder = new Orders(orderDetails);
    await updatedOrder.save();
    return NextResponse.json({
      message: "Updated the orders",
    });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({
      message: "Error Occured!! - " + error,
    });
  }
};
