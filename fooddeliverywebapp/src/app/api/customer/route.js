import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionUrl } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";

export async function GET(req, res) {
  const queryParams = req.nextUrl.searchParams;

  try {
    const restaurantName = queryParams.get("restaurantName");
    const location = queryParams.get("location");

    console.log(restaurantName, "location", location);

    let success = false;
    const filter = {};

    if (restaurantName) {
      filter.name = { $regex: restaurantName, $options: "i" };
    }

    if (location) {
      filter.city = { $regex: location, $options: "i" };
    }

    await mongoose.connect(connectionUrl, {
      userNewUrlParsser: true,
      userUnifiedTopology: true,
    });
    let result = await restaurantSchema.find(filter);

    if (result.length > 0) {
      success = true;
    }
    return NextResponse.json({
      success: success,
      result: result,
    });
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}
