import React from "react";
import HomePage from "./HomePage";
import Navbar from "../Component/Navbar";
import Body from "../Component/Body";
import Fotter from "../Component/Fotter";
import Reviewcard from "../Component/Reviewcard";
import Items from "../Component/Items";
import List from "../Component/List";
import Contact from "./Contact";
import { FaLongArrowAltRight } from "react-icons/fa";
import { ItemsData } from "../Configure/ItemsData";
import { userdetails } from "../Configure/ReviewcardData";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Body />
      <div>
        <div className="flex flex-col">
          <div className="flex justify-center pt-20">
            <h1 className="font-sans font-semibold text-5xl">
              About <span className="text-orange-500">Us</span>
            </h1>
          </div>
          <div className="flex items-center pl-5 gap-5 justify-center">
            <img
              src="https://png.pngtree.com/background/20230618/original/pngtree-delicious-burger-with-many-ingredients-isolated-on-white-background-tasty-cheeseburger-picture-image_3713226.jpg"
              alt=""
              className="h-[500px]"
            />
            <div className="flex flex-col bg-orange-500 text-white p-10 rounded-tl-full rounded-bl-full mt-16">
              <p className="font-sans text-lg p-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
                repellendus veritatis obcaecati incidunt officia molestiae,
                excepturi rem, ipsa reprehenderit quas explicabo ad magni dicta
                nemo atque corporis inventore harum fugit! Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Quasi praesentium velit,
                deserunt consequuntur sit eum deleniti distinctio vitae numquam
                autem suscipit debitis officiis doloremque dicta sequi dolorum
                odio atque tempora!
              </p>
              <p className="font-sans text-lg p-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia optio iure, adipisci in at necessitatibus doloribus
                magni dolorem ab quas itaque totam autem et similique modi
                suscipit, iste quasi neque.
              </p>
              <div className="flex justify-center">
                <Link to={"/about"}>
                  <button className="bg-white text-orange-500 w-[192px] h-[48px] font-sans rounded-full font-medium">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center p-20">
          <h1 className="font-sans font-semibold text-5xl pt-20">
            Why <span className="text-orange-500">Us</span>
          </h1>
        </div>
        <div className="flex p-6 gap-6 justify-center">
          <div className="flex flex-col">
            <div className="bg-white w-[322px] h-[370px] rounded-lg shadow-lg">
              <div className="flex justify-center">
              <div className="bg-orange-500 rounded-full h-[180px] w-[180px] flex items-center justify-center">
                <img
                  src="https://www.shutterstock.com/image-vector/satisfaction-icon-5-stars-reputation-260nw-1659792028.jpg"
                  alt=""
                  className="w-[120px] h-[120px] rounded-full"
                />
              </div>
              </div>
              <div className="w-[260px] p-5">
                <hr />
              </div>
              <div className="pl-5">
                <h1 className="font-sans font-semibold text-2xl">
                  Best Quality
                </h1>
                <p className="font-sans text-base">
                  Lorem ipsum dolor sit amet consectetu Lorem ipsum dolor sit
                  amet consectetu
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="bg-white w-[322px] h-[370px] rounded-lg shadow-lg">
              <div className="flex justify-center">
              <div className="bg-orange-500 rounded-full h-[180px] w-[180px] flex items-center justify-center">
                <img
                  src="https://media.istockphoto.com/id/1359129401/vector/licking-lips-emoji-tasty-food-symbol-yummy-sign.jpg?s=612x612&w=0&k=20&c=IuB0_fvBa0uvdGMzWjtgPruFU6lqDap5CimLCRGjx6I="
                  alt=""
                  className="w-[120px] h-[120px] rounded-full"
                />
              </div>
              </div>
              <div className="w-[260px] p-5 ">
                <hr />
              </div>
              <div className="pl-5">
                <h1 className="font-sans font-semibold text-2xl">
                  Super Taste
                </h1>
                <p className="font-sans text-base">
                  Lorem ipsum dolor sit amet consectetu Lorem ipsum dolor sit
                  amet consectetu
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="bg-white w-[322px] h-[370px] rounded-lg shadow-lg">
              <div className="flex justify-center">
              <div className="bg-orange-500 rounded-full h-[180px] w-[180px] flex items-center justify-center">
                <img
                  src="https://st.depositphotos.com/57803962/55510/v/450/depositphotos_555106746-stock-illustration-scooter-icon-vector-illustration.jpg"
                  alt=""
                  className="w-[120px] h-[120px] rounded-full"
                />
              </div>
              </div>
              <div className="w-[260px] p-5">
                <hr />
              </div>
              <div className="pl-5">
                <h1 className="font-sans font-semibold text-2xl">
                  Fast Delivery
                </h1>
                <p className="font-sans text-base">
                  Lorem ipsum dolor sit amet consectetu Lorem ipsum dolor sit
                  amet consectetu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col p-20">
        <h1 className="font-semibold font-sans text-4xl">
          Latest <span className="text-orange-600">Offers</span>
        </h1>
        <div className="flex flex-wrap gap-5 p-5 items-center justify-center">
          {ItemsData.map((hello) => {
            return <Items item={hello} />;
          })}
        </div>
      </div>
      <div className="flex items-center justify-center flex-col p-20">
        <h1 className="font-semibold font-sans text-4xl">
          Customer's <span className="text-orange-600">Reviews</span>
        </h1>
        <div className="flex flex-wrap gap-5 p-5 items-center justify-center">
          {userdetails.map((details) => {
            return <Reviewcard reviews={details} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
