import { connectDB } from "@/helper/db";
import { User } from "@/models/users";
import { NextResponse } from "next/server";

//To add the users
export const POST = async (request) => {
  try {
    await connectDB();
    const data = await request.json();

    const user = new User(data);

    await user.save();

    return NextResponse.json(user, {
      message: "User Added!!!",
      status: 201,
    });
  } catch (error) {
    console.log("Error from user get route", error);
    return NextResponse.json({
      message: "Failed to get the user!!!" + error,
      status: false,
    });
  }
};

//To get all the users
export const GET = async (request) => {
  try {
    const result = await User.find();
    console.log("All Users", result);

    return NextResponse.json(result, {
      status: 201,
    });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({
      message: "Failed to get the users!!!" + error,
      status: false,
    });
  }
};
