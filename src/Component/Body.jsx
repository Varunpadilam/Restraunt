import React from "react";

const Body = () => {
  return (
    <div className="w-[100vw] md:w-auto bg-green-500 bg-burger bg-no-repeat bg-cover h-[50vh] md:h-[100vh] flex justify-center items-center">
      <div className="w-[100%] h-screen flex justify-center items-center">
        <div className="bg-white p-1 rounded-full">
          <input
            type="text"
            placeholder="Search...."
            className="z-10 w-[300px] h-[30px] bg-transparent ml-4 focus:outline-none"
          />
          <button className="bg-orange-500 pt-3 pb-3 pr-6 pl-6 rounded-full text-white">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
