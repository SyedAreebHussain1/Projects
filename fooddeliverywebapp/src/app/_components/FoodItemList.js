import React, { useState, useEffect } from "react";

const FoodItemList = () => {
  const id = JSON.parse(localStorage.getItem("restaurantUser"))._id;
  const [dataSource, setDataSource] = useState();
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
                <button>Delete</button>
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
  console.log(dataSource);
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
          {dataSource?.map((item, i) => {
            return (
              <tr key={i}>
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
