import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RestaurantSignUp = () => {
  const [state, setState] = useState({});
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const handleChange = (event) => {
    const { value, name } = event.target;
    setState((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { confirmPassword, ...body } = state;
    if (
      confirmPassword !== body.password ||
      confirmPassword === undefined ||
      body.password === undefined ||
      confirmPassword === "" ||
      body.password === ""
    ) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (
      !body.email ||
      !body.contact ||
      !body.city ||
      !body.address ||
      !body.password
    ) {
      setError(true);
    } else {
      setError(false);
    }
    if (
      body.password &&
      body.email &&
      body.contact &&
      body.city &&
      body.address &&
      confirmPassword == body.password &&
      confirmPassword !== "" &&
      body.password !== ""
    ) {
      setPasswordError(false);
      setError(false);
      let res = await fetch("http://localhost:3000/api/restaurant", {
        method: "POST",
        body: JSON.stringify(body),
      });
      res = await res.json();
      if (res?.message) {
        const { result } = res;
        delete result.password;
        localStorage.setItem("restaurantUser", JSON.stringify(result));
        router.push("/restaurant/dashboard");
      }
    }
  };
  return (
    <>
      {" "}
      <h3>Signup Component</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="input-wrapper">
            <input
              onChange={handleChange}
              type="text"
              name="email"
              value={state.email}
              className="input-field"
              placeholder="Enter email"
            />
            {error && !state.email && (
              <span className="input-error">Email is Req</span>
            )}
          </div>
          <div className="input-wrapper">
            <input
              name="password"
              onChange={handleChange}
              type="password"
              value={state.password}
              className="input-field"
              placeholder="Enter Password "
            />
            {((passwordError && state.password !== state.confirmPassword) ||
              (passwordError && state.password == "") ||
              (passwordError && state.password == undefined)) && (
              <span className="input-error">
                Password and confirm password not match
              </span>
            )}
          </div>
          <div className="input-wrapper">
            <input
              onChange={handleChange}
              type="password"
              value={state.confirmPassword}
              name="confirmPassword"
              className="input-field"
              placeholder="Confirm Password "
            />{" "}
            {((passwordError && state.confirmPassword !== state.password) ||
              (passwordError && state.confirmPassword == "") ||
              (passwordError && state.confirmPassword == undefined)) && (
              <span className="input-error">
                Password and confirm password not match
              </span>
            )}
          </div>
          <div className="input-wrapper">
            <input
              onChange={handleChange}
              type="text"
              name="name"
              className="input-field"
              placeholder="Enter restaurent name"
            />
            {error && !state.name && (
              <span className="input-error">Name is Req</span>
            )}
          </div>
          <div className="input-wrapper">
            <input
              onChange={handleChange}
              type="text"
              name="city"
              className="input-field"
              placeholder="Enter city"
            />{" "}
            {error && !state.city && (
              <span className="input-error">City is Req</span>
            )}
          </div>
          <div className="input-wrapper">
            <input
              name="address"
              onChange={handleChange}
              type="text"
              className="input-field"
              placeholder="Enter full address"
            />{" "}
            {error && !state.address && (
              <span className="input-error">Address is Req</span>
            )}
          </div>
          <div className="input-wrapper">
            <input
              onChange={handleChange}
              type="text"
              name="contact"
              className="input-field"
              placeholder="Enter contact no"
            />
            {error && !state.contact && (
              <span className="input-error">Contact is Req</span>
            )}
          </div>
          <div className="input-wrapper">
            <button className="button" type="submit">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default RestaurantSignUp;
