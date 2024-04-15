import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionUrl } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/foodsModel";

export async function GET(req, res) {
  const id = res.params.id;
  let success = false;
  await mongoose.connect(connectionUrl, { useNewUrlParser: true });
  const data = await foodSchema.find({ resto_id: id });
  if (data) {
    success = true;
  }
  return NextResponse.json({
    result: data,
    message: success ? "Get" : "Not GET",
  });
}
