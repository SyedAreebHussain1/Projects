"use client";
import { useEffect, useState } from "react";
import RestaurantHeader from "@/app/_components/RestaurantHeader";
import AddFoodItems from "@/app/_components/AddFoodItems";
import "./../style.css";
import FoodItemList from "@/app/_components/FoodItemList";

const Dashboard = () => {
  const [addItem, setAddItem] = useState(false);
  return (
    <div>
      <RestaurantHeader />
      <button onClick={() => setAddItem(true)}>Add Food</button>
      <button onClick={() => setAddItem(false)}>Dashboard</button>
      {addItem ? <AddFoodItems setAddItem={setAddItem} /> : <FoodItemList />}
    </div>
  );
};
export default Dashboard;
