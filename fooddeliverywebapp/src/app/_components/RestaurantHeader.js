"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const RestaurantHeader = (context) => {
  const [details, setDetails] = useState();
  const router = useRouter();
  const pathName = usePathname();
  useEffect(() => {
    let data = localStorage.getItem("restaurantUser");
    if (!data && pathName === "/restaurant/dashboard") {
      router.push("/restaurant");
    } else if (data && pathName === "/restaurant") {
      router.push("/restaurant/dashboard");
    } else {
      setDetails(JSON.parse(data));
    }
  }, [pathName]);
  return (
    <div className="header-wrapper">
      <div className="logo">
        <img
          style={{ width: 100 }}
          src="https://logowik.com/content/uploads/images/414_restaurant.jpg"
          alt=""
        />
      </div>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        {details && details?.email ? (
          <>
            <li>
              <button
                onClick={() => {
                  localStorage.removeItem("restaurantUser");
                  setDetails(null);
                  router.push("/restaurant");
                }}
              >
                Logout
              </button>
            </li>
            <li>
              <Link href={"/login"}>Profile</Link>
            </li>
          </>
        ) : (
          <li>
            <Link href={"/login"}>Login/signUp</Link>
          </li>
        )}
      </ul>
    </div>
  );
};
export default RestaurantHeader;
