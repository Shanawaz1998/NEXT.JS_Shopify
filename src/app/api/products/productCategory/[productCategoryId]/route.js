import { ProductCategory } from "@/models/productCategory";
import { NextResponse } from "next/server";

//To get the single product category
export const GET = async (request, { params }) => {
  try {
    const productCatId = params.productCategoryId;
    const result = await ProductCategory.findById(productCatId);

    console.log("ID", productCatId);
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

//To delete the single product
export const DELETE = async (request, { params }) => {
  try {
    const productCatId = params.productCategoryId;
    const result = await ProductCategory.findByIdAndDelete(productCatId);

    return NextResponse.json({
      message: "Product category deleted",
    });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({
      message: "Error Occured!! - " + error,
    });
  }
};

//To update product category
export const PUT = async (request, { params }) => {
  try {
    const productCatId = await params.productCategoryId;
    const data = await request.json();
    const productCatDetails = await ProductCategory.findById(productCatId);

    (productCatDetails.categoryName = data.categoryName),
      (productCatDetails.categoryDesc = data.categoryDesc);
    const updatedResult = new ProductCategory(productCatDetails);
    await updatedResult.save();

    return NextResponse.json({
      message: "product updated",
      status: 201,
    });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({
      message: "Error Occured!! - " + error,
    });
  }
};
