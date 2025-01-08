import React from "react";

const Body = () => {
  return (
    <div>
      <div className="w-[100%] h-screen flex justify-center items-center">
        <div className="bg-white p-1 rounded-full">
          <input
            type="text"
            placeholder="Search...."
            className="z-10 w-[300px] h-[30px] bg-transparent ml-4 focus:outline-none"
          />
          <button className="bg-orange-500 pt-3 pb-3 pr-6 pl-6 rounded-full text-white">Search</button>
        </div>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/037/236/579/small_2x/ai-generated-beautuful-fast-food-background-with-copy-space-free-photo.jpg"
          alt=""
          className="w-full h-screen absolute  -z-10"
        />
      </div>
    </div>
  );
};

export default Body;
