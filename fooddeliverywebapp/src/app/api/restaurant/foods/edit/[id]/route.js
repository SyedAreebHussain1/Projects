import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionUrl } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/foodsModel";

export async function GET(req, res) {
  try {
    const { id } = res.params;
    let success = false;
    await mongoose.connect(connectionUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const result = await foodSchema.findOne({ _id: id });
    if (!result) {
      return NextResponse.json({
        success: false,
        message: "Data not found",
      });
    }
    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Error updating document:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
export async function PUT(req, res) {
  try {
    const { id } = res.params;
    const payload = await req.json();
    let success = false;
    await mongoose.connect(connectionUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // const result = await foodSchema.updateOne({ _id: id }, { $set: payload });
    const result = await foodSchema.findOneAndUpdate({ _id: id }, payload);
    if (result) {
      success = true;
    }
    return NextResponse.json({
      data: result,
      message: success ? "Successfully Updated" : "Not Updated",
    });
  } catch (error) {
    console.error("Error updating document:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
