"use client";
import React, { useEffect } from "react";
import CustomerHeader from "./_components/CustomerHeader";
import Footer from "./_components/Footer";
import styles from "./page.module.css";
require("dotenv").config();

export default function Home() {
  const [locationList, setLocationList] = React.useState([]);
  const [selectedLocation, setSelectedLocation] = React.useState("");
  const [showLocationList, setShowLocationList] = React.useState(false);
  const [restaurants, setRestaurants] = React.useState([]);

  const handleGetLocation = async () => {
    let res = await fetch("http://localhost:3000/api/customer/locations", {
      method: "GET",
    });
    res = await res.json();
    setLocationList(res?.result);
    try {
    } catch (error) {
      log.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    handleGetLocation();
    handleGetRestaurants();
  }, []);

  const handleSelectLocation = function (item) {
    setSelectedLocation(item);
    setShowLocationList(true);
    console.log(item);

    handleGetRestaurants({ location: item });
  };
  const handleGetRestaurants = async (param) => {
    console.log("ruuuuu");

    const url = `http://localhost:3000/api/customer${
      param?.location && param?.restaurantName
        ? `?location=${param?.location}&restaurantName=${param?.restaurantName}`
        : param?.location
        ? `?location=${param?.location}`
        : param?.restaurantName
        ? `?restaurantName=${param?.restaurantName}`
        : ""
    }`;
    console.log(url);

    try {
      let res = await fetch(url, {
        method: "GET",
      });
      res = await res.json();
      if (res.success) setRestaurants(res?.result);
      else setRestaurants([]);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  // console.log(restaurants);

  return (
    <main>
      <CustomerHeader />
      <div className="main-page-banner">
        <h1>Food Delivery App</h1>
        <div className="input-wrapper">
          <input
            type="text"
            className="select-input"
            placeholder="Select Place"
            value={selectedLocation}
            onFocus={() => setShowLocationList(false)}
          />
          {!showLocationList && (
            <ul className="location-list">
              {locationList.map((item, i) => (
                <li key={i} onClick={() => handleSelectLocation(item)}>
                  {item}
                </li>
              ))}
            </ul>
          )}
          {/* <select className="select-input" placeholder="Select Place">
            {locationList.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select> */}
          <input
            type="text"
            className="search-input"
            placeholder="Enter food or restaurent name"
            onChange={(e) =>
              handleGetRestaurants({ restaurantName: e.target.value })
            }
          />
        </div>
      </div>
      <div className="resturant-list-container">
        {restaurants.length > 0 &&
          restaurants.map((item, i) => {
            return (
              <div className="resturant-wrapper" key={i}>
                <div className="heading-wrapper">
                  <h3>{item.name}</h3>
                  <h5>Contact: {item.contact}</h5>
                </div>
                <div className="address-wrapper">
                  <p>{item.city},</p>
                  <p>
                    &nbsp; {item.address}&nbsp; Email: {item?.email}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
      <Footer />
    </main>
  );
}
