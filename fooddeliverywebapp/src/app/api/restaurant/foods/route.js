import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionUrl } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/foodsModel";

export async function POST(req) {
  const payload = await req.json();
  let success = false;
  await mongoose.connect(connectionUrl, { useNewUrlParser: true });
  const food = new foodSchema(payload);
  let result = await food.save();
  if (result) {
    success = true;
  }
  return NextResponse.json({
    result: result,
    message: success ? "Successfully Created" : "Not Created",
  });
}
