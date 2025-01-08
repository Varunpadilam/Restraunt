import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { LuUserRound } from "react-icons/lu";

const Contact = () => {
  return (
    <div className="flex flex-wrap justify-between p-10 ">
      <div className="bg-slate-400 rounded-md w-[648px] h-[654px] flex flex-col border-0 p-5 gap-6 shadow-lg">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-white font-semibold font-serif text-base">
              First Name
            </h1>
            <input
              type="text"
              placeholder="First Name"
              className="font-light rounded-md pl-1 w-[250px] h-[39px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-white font-semibold font-serif text-base">
              Last Name
            </h1>
            <input
              type="text"
              placeholder="Last Name"
              className="font-light rounded-md pl-1 w-[250px] h-[39px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-white font-semibold font-serif text-base">
            Email
          </h1>
          <input
            type="text"
            placeholder="xyz@gmail.com"
            className="font-light rounded-md pl-1 h-[39px]"
          />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-white font-semibold font-serif text-base">
              Phone Number
            </h1>
            <input
              type="text"
              placeholder="+91 0123456789"
              className="font-light rounded-md pl-1 w-[250px] h-[39px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-white font-semibold font-serif text-base">
              Location
            </h1>
            <input
              type="text"
              placeholder="Current Location"
              className="font-light rounded-md pl-1 w-[250px] h-[39px]"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white font-semibold font-serif text-base">
            Write Here
          </h1>
          <textarea type="text" className="rounded-md h-[177px]" />
        </div>
        <div className="flex justify-center p-2">
        <div className="bg-orange-500 w-[222px] h-[68px] rounded-full flex justify-center">
          <button className="text-white font-semibold text-xl">
            Submit feedback
          </button>
        </div>
        </div>
      </div>
      <div className="bg-slate-400 rounded-md w-[648px] h-[654px] flex flex-col border-0 p-5 gap-6 shadow-lg">
        <div className="flex flex-col gap-5">
          <div className="flex justify-center p-3">
          <div className="bg-orange-500 flex h-[135px] w-[266px] rounded-md text-white p-6 items-center gap-5 ">
            <FaLocationDot className="fill-white w-[20px] h-[28.57px]" />
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold">Location</h1>
              <p className="text-base font-medium">
                Street,-5,61-20, Lorem Ipsum,Lorem Ipsum, India 535001.
              </p>
            </div>
          </div>
          </div>
          <div className="flex justify-center p-3">
          <div className="bg-orange-500 flex h-[135px] w-[266px] rounded-md text-white p-6 items-center gap-5 ">
            <LuUserRound className="fill-white w-[20px] h-[22.86px]" />
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold">Contact Info</h1>
              <p className="text-base font-medium">xyz@gmail.com</p>
            </div>
          </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center p-5">
              <h1 className="text-2xl font-semibold">Follow Us On</h1>
            </div>
            <div className="flex gap-5 justify-center">
              <FaFacebook className="fill-white w-[30px] h-[30px]" />
              <FaTwitter className="fill-white w-[30px] h-[30px]" />
              <FaInstagram className="fill-white w-[30px] h-[30px]" />
              <FaYoutube className="fill-white w-[30px] h-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
