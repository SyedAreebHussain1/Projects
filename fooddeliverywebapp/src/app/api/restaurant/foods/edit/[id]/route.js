import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionUrl } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/foodsModel";

export async function GET(req, res) {
  const id = res.params.id;
  let success = false;
  await mongoose.connect(connectionUrl, { useNewUrlParser: true });
  const data = await foodSchema.findOne({ _id: id });
  if (data) {
    success = true;
  }
  return NextResponse.json({
    data,
    success: success ? "GET SUCCESSFULLY" : "NOT GET",
  });
}

export async function PUT(req, res) {
  const id = res.params.id;
  const payload = await req.json();
  // console.log("payload=>", payload);
  let success = false;
  await mongoose.connect(connectionUrl, { useNewUrlParser: true });
  const data = await foodSchema.findOneAndUpdate({ _id: id }, payload);
  if (data) {
    success = true;
  }
  return NextResponse.json({
    data,
    success: success ? "UPDATE SUCCESSFULLY" : "NOT WORK",
  });
}
