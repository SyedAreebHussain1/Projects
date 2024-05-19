import React, { useState, useEffect } from "react";

const FoodItemList = () => {
  const id = JSON.parse(localStorage.getItem("restaurantUser"));
  const [dataSource, setDataSource] = useState();

  const handleDelete = async (foodId) => {
    try {
      let res = await fetch(
        `http://localhost:3000/api/restaurant/foods/${foodId}`,
        {
          method: "DELETE",
        }
      );
      let data = await res.json();
      if (data) {
        fetchData();
      }
    } catch (error) {
      console.error("Error: ", error);
    }
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
      if (data?.result.length > 0) {
        let dataValue = data?.result?.map((item, i) => {
          return {
            Sno: <span>{i + 1}</span>,
            name: <span>{item?.name}</span>,
            price: <span>{item.price}</span>,
            description: <span>{item?.description}</span>,
            image: <span>{item?.img_path}</span>,
            operations: (
              <div>
                <button onClick={() => handleDelete(item?._id)}>Delete</button>
                <button>Edit</button>
              </div>
            ),
          };
        });
        setDataSource(dataValue);
      } else {
        setDataSource([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h3>FoodItemList</h3>
      <table>
        <thead>
          <tr>
            {[
              "S.no",
              "Name",
              "Price",
              "Description",
              "Image",
              "Operations",
            ].map((item, i) => {
              return <td key={i}>{item}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {dataSource?.map((item) => {
            return (
              <tr key={item?._id}>
                <td>{item.Sno}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>{item.image}</td>
                <td>{item.operations}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FoodItemList;
