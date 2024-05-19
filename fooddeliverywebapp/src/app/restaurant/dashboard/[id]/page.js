"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditFoodItems = ({ params }) => {
  const [state, setState] = useState({});
  const id = JSON.parse(localStorage.getItem("restaurantUser"));
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (event) => {
    const { value, name } = event?.target;
    setState((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  const fetchData = async () => {
    try {
      let res = await fetch(
        `http://localhost:3000/api/restaurant/foods/${id._id}`,
        {
          method: "GET",
        }
      );
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      let data = await res.json();
      if (data) {
        const filter = data.result.filter((item) => item._id === params?.id);
        setState(filter[0]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    if (params.id) {
      fetchData();
    }
  }, [params.id]);

  async function handleSubmit(event) {
    event.preventDefault();
    const restaurantId = localStorage.getItem("restaurantUser");
    const body = {
      ...state,
      price: state?.price,
      resto_id: JSON.parse(restaurantId)._id,
    };
    if (!body.name || !body.img_path || !body.price || !body.description) {
      setError(true);
      return false;
    } else {
      setError(false);
    }
    if (
      body.name &&
      body.img_path &&
      body.price &&
      body.description &&
      JSON.parse(restaurantId)
    ) {
      setError(false);
      try {
        let res = await fetch("http://localhost:3000/api/restaurant/foods", {
          method: "POST",
          body: JSON.stringify(body),
        });
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        let data = await res.json();
        if (data) {
          router.back();
        }
      } catch (error) {
        console.error("Error post data:", error);
      }
    }
  }
  return (
    <div className="container">
      <h3>Update Food Item</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              value={state?.name}
              onChange={handleChange}
              className="input-field"
              placeholder="Enter food name"
            />
            {error && !state?.name && (
              <span className="input-error">please enter name</span>
            )}
          </div>
          <div className="input-wrapper">
            <input
              type="number"
              value={state?.price}
              name="price"
              onChange={handleChange}
              className="input-field"
              placeholder="Enter price"
            />
            {error && !state?.price && (
              <span className="input-error">please enter price</span>
            )}
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              value={state?.img_path}
              name="img_path"
              onChange={handleChange}
              className="input-field"
              placeholder="Enter path"
            />
            {error && !state?.img_path && (
              <span className="input-error">please enter img path</span>
            )}
          </div>
          <div>
            <textarea
              className="input-wrapper"
              type="text"
              value={state?.description}
              name="description"
              onChange={handleChange}
              placeholder="Enter description"
            />
            {error && !state?.description && (
              <span className="input-error">please enter description</span>
            )}
          </div>
          <div className="input-wrapper">
            <button className="button" type="submit">
              Edit food Item
            </button>
          </div>
          <div className="input-wrapper">
            <button className="button" onClick={() => router.back()}>
              Back to Food Item List
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditFoodItems;
