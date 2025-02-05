"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const UpdateFoodItems = (props) => {
  const router = useRouter();
  const [state, setState] = useState(null);
  const [error, setError] = useState(null);

  const handleBack = () => {
    router.push("../dashboard");
  };
  const handleChange = (event) => {
    const { value, name } = event?.target;
    setState((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const restaurantId = localStorage.getItem("restaurantUser");
    const body = {
      ...state,
      price: Number(state?.price),
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
      let res = await fetch(
        `http://localhost:3000/api/restaurant/foods/edit/${props.params.id}`,
        {
          method: "PUT",
          body: JSON.stringify(body),
        }
      );
      res = await res.json();
      if (res.message) {
        handleBack();
        alert(res?.message);
      }
      event.target.name.value = "";
      event.target.price.value = "";
      event.target.description.value = "";
      event.target.img_path.value = "";
      setState(null);
    }
  }

  useEffect(() => {
    if (props.params.id) {
      handleGetById(props.params.id);
    }
  }, [props.params.id]);
  const handleGetById = async (id) => {
    let res = await fetch(
      `http://localhost:3000/api/restaurant/foods/edit/${id}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    if (data?.data) {
      setState(data?.data);
    }
  };

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
              type="text"
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
              Update food Item
            </button>
          </div>
          <div>
            <button className="button" type="reset" onClick={handleBack}>
              Back to food item list
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateFoodItems;
