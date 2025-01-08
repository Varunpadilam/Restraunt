import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex">
      <div className="flex flex-col bg-white w-[720px] h-[687px] p-20">
        <div>
          <h1 className="text-5xl font-sans font-semibold p-3">
            Welcome <span className="text-orange-500">Back</span>
          </h1>
          <p className="text-2xl text-gray-500 p-3 font-sans ">
            Login with your Email address and Password
          </p>
          <div className="p-1">
            <h1 className="text-3xl font-sans font-semibold p-3">
              Email address
            </h1>
            <input
              type="text"
              placeholder="xyz@gmail.com"
              className="w-[588px] h-[39px] border-2 shadow-lg rounded-lg p-3"
            />
          </div>
          <div className="p-1">
            <h1 className="text-3xl font-sans font-semibold p-3">Password</h1>
            <input
              type="text"
              placeholder="......"
              className="w-[588px] h-[39px] border-2 shadow-lg rounded-lg text-5xl pb-8 pl-2 text-start"
            />
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row p-3">
              <input type="checkbox" className="p-3" />
              <h3 className="font-sans text-gray-500 text-lg pl-1">
                Remember me
              </h3>
            </div>
            <h3 className="font-sans text-gray-500 p-3 text-lg">
              Forgot Password?
            </h3>
          </div>
          <div className="flex justify-center p-3">
            <button className="bg-orange-500 text-white font-medium rounded-full text-2xl w-[160px] h-[48px]">
              Login
            </button>
          </div>
          <div className="flex justify-center items-center gap-4">
            <h3 className="text-2xl font-sans font-normal text-gray-500">
              Don't have an account ?
            </h3>
            <Link to={"/signup"}>
              {" "}
              <h1 className="text-orange-500 text-3xl font-sans font-semibold">
                Sign up
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://media.gettyimages.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98="
          alt=""
          className="h-[687px]"
        />
      </div>
    </div>
  );
};

export default Login;
