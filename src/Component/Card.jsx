import React from "react";

function Card({ title, image, price, rating }) {
  return (
    <div className="flex flex-col w-[250px] border border-black-2 p-[5px] hover:cursor-pointer">
      <div className="flex justify-center w-auto h-auto">
        <img src={image} className="h-[200px] w-[100px]" />
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <div className="flex justify-between">
          <p>{price}</p>
          <p>{rating?.rate}</p> 
        </div>
      </div>
    </div>
  );
}

export default Card;
