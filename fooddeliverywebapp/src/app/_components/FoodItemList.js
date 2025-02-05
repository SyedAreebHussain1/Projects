import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const FoodItemList = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    loadFoodItem();
  }, []);
  const loadFoodItem = async () => {
    const restaurantUser = JSON.parse(localStorage.getItem("restaurantUser"));
    const resto_id = restaurantUser?._id;
    try {
      let res = await fetch(
        `http://localhost:3000/api/restaurant/foods/${resto_id}`,
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

  const handleDelete = async (id) => {
    if (id) {
      const res = await fetch(
        `http://localhost:3000/api/restaurant/foods/${id}`,
        {
          method: "DELETE",
        }
      );
      try {
        const data = await res.json();
        if (data?.success) {
          loadFoodItem();
        } else {
          alert("Failed to delete");
        }
      } catch {
        console.log("Error =>", err);
      }
    }
  };
  return (
    <div>
      <h1>FoodItemList</h1>
      <table>
        <tr>
          <th>S.N</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Image</th>
          <th>Operation</th>
        </tr>
        {dataSource?.length > 0 &&
          dataSource.map((item, i) => {
            return (
              <tr key={item.id}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  {" "}
                  <img src={item.img_path} />
                </td>
                <td>
                  <button
                    onClick={() => {
                      // router.push("dashboard/" + item?._id);
                      router.push(pathname + "/" + item?._id);
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDelete(item?._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default FoodItemList;
