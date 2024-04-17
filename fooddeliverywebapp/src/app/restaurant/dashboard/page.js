"use client";
import { useEffect, useState } from "react";
import RestaurantHeader from "@/app/_components/RestaurantHeader";
import AddFoodItems from "@/app/_components/AddFoodItems";
import FoodItemList from "@/app/_components/FoodItemList";

import "./../style.css";

const Dashboard = () => {
  const [addItem, setAddItem] = useState(false);
  return (
    <div>
      <RestaurantHeader />
      <button onClick={() => setAddItem(!addItem)}>
        {!addItem ? "Add Food" : "Dashboard"}
      </button>
      {addItem ? <AddFoodItems /> : <FoodItemList />}
    </div>
  );
};
export default Dashboard;
