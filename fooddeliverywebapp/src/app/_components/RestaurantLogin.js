import React, { useState } from "react";
import { useRouter } from "next/navigation";

const RestaurantLogin = () => {
  const router = useRouter();
  const [state, setState] = useState({});
  const [error, setError] = useState(false);
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
    const body = {
      ...state,
      login: true,
    };
    if (!body.email || !body.password) {
      setError(true);
      return false;
    }
    if (body.password && body.email) {
      setError(false);
      let res = await fetch("http://localhost:3000/api/restaurant", {
        method: "POST",
        body: JSON.stringify(body),
      });
      res = await res.json();
      if (res?.result) {
        const { result } = res;
        if (result?.password) {
          delete result?.password;
        }
        localStorage.setItem("restaurantUser", JSON.stringify(result));
        router.push("/restaurant/dashboard");
      }
      alert(res?.message);
    }
  };
  return (
    <>
      <h3>Login Component</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="input-wrapper">
            <input
              type="text"
              name="email"
              onChange={handleChange}
              className="input-field"
              placeholder="Enter email"
            />
            {error && !state.email && (
              <span className="input-error">please enter valid email</span>
            )}
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              onChange={handleChange}
              name="password"
              className="input-field"
              placeholder="Enter password "
            />{" "}
            {error && !state.password && (
              <span className="input-error">please enter valid password</span>
            )}
          </div>
          <div className="input-wrapper">
            <button className="button" type="submit">
              Login
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default RestaurantLogin;
