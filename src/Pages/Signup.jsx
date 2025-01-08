import React from "react";

const Signup = () => {
  return (
    <div>
      <h1 className="font-sans font-semibold text-5xl text-center p-10">
        Welcome to <span className="text-orange-500">App Name</span>
      </h1>
      <div className="flex p-5 gap-6">
        <div className="flex flex-col bg-white w-[588px] h-[840px] justify-center">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h1 className="font-sans font-semibold text-2xl pb-3">
                First Name <span className="text-orange-500">*</span>
              </h1>
              <input
                type="text"
                placeholder="First Name"
                className="w-[250px] h-[39px] rounded-lg border-2 shadow-lg pl-2"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="font-sans font-semibold text-2xl pb-3">
                Last Name <span className="text-orange-500">*</span>
              </h1>
              <input
                type="text"
                placeholder="Last Name"
                className="w-[250px] h-[39px] rounded-lg border-2 shadow-lg pl-2"
              />
            </div>
          </div>
          <div>
            <h1 className="font-sans font-semibold text-2xl pb-3 pt-5">
              Email <span className="text-orange-500">*</span>
            </h1>
            <input
              type="text"
              placeholder="xyz@gmail.com"
              className="w-[588px] h-[39px] border-2 rounded-lg shadow-lg pl-2"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h1 className="font-sans font-semibold text-2xl pb-3 pt-5">
                Phone Number <span className="text-orange-500">*</span>
              </h1>
              <input
                type="tel"
                placeholder="+91 0123456789"
                className="w-[250px] h-[39px] rounded-lg border-2 shadow-lg pl-2"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="font-sans font-semibold text-2xl pb-3 pt-5">
                Location <span className="text-orange-500">*</span>
              </h1>
              <input
                type="text"
                placeholder="Current Location"
                className="w-[250px] h-[39px] rounded-lg border-2 shadow-lg pl-2"
              />
            </div>
          </div>
          <div>
            <h1 className="font-sans font-semibold text-2xl pb-3 pt-5">
              Password <span className="text-orange-500">*</span>
            </h1>
            <input
              type="Password"
              placeholder="......"
              className="w-[588px] h-[39px] border-2 rounded-lg shadow-lg pl-2 text-5xl pb-8 text-start"
            />
          </div>
          <div>
            <h1 className="font-sans font-semibold text-2xl pb-3 pt-5">
              Confirm Password <span className="text-orange-500">*</span>
            </h1>
            <input
              type="Password"
              placeholder="......"
              className="w-[588px] h-[39px] border-2 rounded-lg shadow-lg pl-2 text-5xl pb-8 text-start"
            />
          </div>
          <div className="flex pt-5 items-center">
            <input type="checkbox" className="p-3" />
            <h3 className="font-sans text-xl pl-3">
              I agree to App name{" "}
              <span className="text-orange-500">
                Terms of service,Privacy Policy
              </span>{" "}
              and <span className="text-orange-500">Content Policies</span>
            </h3>
          </div>
          <div className="pt-5 text-white text-3xl font-sans font-semibold">
            <button className="bg-orange-500 w-[588px] h-[75px] rounded-full p-3">
              Create Account
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src="https://media.gettyimages.com/id/1403973419/photo/table-top-of-food-spread-on-table.jpg?s=612x612&w=0&k=20&c=2cROUMurZUtuvqF-bp8lViZ0wDXBNkZBcIjQj2QQlec="
            alt=""
            className="h-[840px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
