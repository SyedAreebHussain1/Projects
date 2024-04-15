import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionUrl } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";

export async function GET() {
  await mongoose.connect(connectionUrl, { useNewUrlParser: true });
  const data = await restaurantSchema.find();
  return NextResponse.json({ result: data });
}
export async function POST(req) {
  let payload = await req.json();
  await mongoose.connect(connectionUrl, { useNewUrlParser: true });
  if (payload.login) {
    const user = await restaurantSchema.findOne({
      email: payload?.email,
      password: payload?.password,
    });
    if (!user) {
      return NextResponse.json({
        message: "User not found",
      });
    }
    return NextResponse.json({
      result: user,
      message: "Successfully Login",
    });
  } else {
    const restaurant = new restaurantSchema(payload);
    const user = await restaurant.save();
    return NextResponse.json({
      result: user,
      message: "Successfully Created",
    });
  }
}
