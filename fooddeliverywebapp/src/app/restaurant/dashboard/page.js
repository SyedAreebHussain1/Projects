"use client";
import { useEffect, useState } from "react";
import RestaurantHeader from "@/app/_components/RestaurantHeader";
import AddFoodItems from "@/app/_components/AddFoodItems";
import "./../style.css";

const Dashboard = () => {
  const [addItem, setAddItem] = useState(false);
  const id = JSON.parse(localStorage.getItem("restaurantUser"))._id;
  const [dataSource, setDataSource] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch(
          `http://localhost:3000/api/restaurant/foods/${id}`,
          {
            method: "GET",
          }
        );
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        let data = await res.json();
        setDataSource(data?.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(dataSource);
  return (
    <div>
      <RestaurantHeader />
      <button onClick={() => setAddItem(!addItem)}>
        {!addItem ? "Add Food" : "Dashboard"}
      </button>
      {addItem ? <AddFoodItems /> : <h1>Welcome to dashboard</h1>}
    </div>
  );
};
export default Dashboard;
