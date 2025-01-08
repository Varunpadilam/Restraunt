import React from "react";
import { useEffect, useState } from "react";
import Card from "../Component/Card";
import Loading from "../Component/Loading";
function HomePage() {
  const [products, setProducts] = useState();
  const [dummydata, setDummyData] = useState();
  function filterCat(e) {
    const filterData = products.filter((ele) => {
      return ele.category === e.target.value;
    });
    setDummyData(filterData);
  }

  useEffect(() => {
    async function callApi() {
      const data = await fetch("https://fakestoreapi.com/products");
      const JsonData = await data.json();
      setProducts(JsonData);
      setDummyData(JsonData);
    }
    callApi();
  }, []);

  if (!products) {
    return (
      <div className="flex justify-center h-screen w-full bg-black">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <div className="flex gap-1 items-center p-[20px]">
          <input
            type={"radio"}
            value=""
            onClick={() => {
              setDummyData(products);
            }}
            name="category"
          />
          <p>All Items</p>
        </div>
        <div className="flex gap-1 items-center p-[20px]">
          <input
            type={"radio"}
            value="men's clothing"
            onClick={(e) => {
              filterCat(e);
            }}
            name="category"
          />
          <p>men's clothing</p>
        </div>
        <div className="flex gap-1 items-center">
          <input
            type={"radio"}
            value="jewelery"
            name="category"
            onClick={(e) => {
              filterCat(e);
            }}
          />{" "}
          jewelery
        </div>
        <div className="flex gap-1 items-center">
          <input
            type={"radio"}
            value="electronics"
            name="category"
            onClick={(e) => {
              filterCat(e);
            }}
          />{" "}
          electronics
        </div>
        <div className="flex gap-1 items-center">
          <input
            type={"radio"}
            value="women's clothing"
            name="category"
            onClick={(e) => {
              filterCat(e);
            }}
          />{" "}
          women's clothing
        </div>
      </div>
      <div className="flex flex-wrap gap-[15px] justify-evenly">
        {dummydata.map((ele) => {
          return <Card {...ele} />;
        })}
      </div>
    </div>
  );
}

export default HomePage;
