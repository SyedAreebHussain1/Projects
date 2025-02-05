import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionUrl } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";

export async function GET() {
  try {
    let success = false;
    await mongoose.connect(connectionUrl, {
      userNewUrlParsser: true,
      userUnifiedTopology: true,
    });
    let result = await restaurantSchema.find();
    result = result.map(
      (item) => item.city.charAt(0).toUpperCase() + item.city.slice(1)
    );
    result = [...new Set(result)];
    if (result) {
      success = true;
    }
    return NextResponse.json({
      success: success ? "Succesfully fetched" : "No fetched",
      result: result,
    });
  } catch (error) {
    console.log("Error fetching data:", error);
    return NextResponse.error({ message: error.message });
  }
}
