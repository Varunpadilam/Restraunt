import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import "../tailwindOutput.css";

const About = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-center h-[699px] overflow-hidden">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center font-semibold text-5xl">
            "Serving Joy, <br />
            <span className="text-orange-600">One</span>
            <br /> Bite at a Time"
          </h1>
          <h3 className="text-center pt-8 font-medium">Scroll for more</h3>
          <IoIosArrowUp className="w-[38px] h-[38px]" />
        </div>
        <div className="w-full h-full -z-10 absolute overflow-hidden">
          <img
            src="https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg"
            alt=""
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-col pt-20 w-full">
        <h1 className="text-4xl font-semibold font-sans text-center ">
          Welcome to Our Website
        </h1>
        <div className="flex justify-evenly  items-center p-4">
          <img
            src="https://png.pngtree.com/png-clipart/20230429/original/pngtree-chicken-biryani-rice-dish-with-transparent-background-hd-png-image_9122564.png"
            alt=""
            className="w-[530px] h-[410px]"
          />
          <p className="w-[582px] h-[256px] text-lg">
            At [Food Delivery Website Name], we are passionate about delivering
            delicious and fresh food right to your doorstep. Our mission is to
            provide you with a seamless and convenient dining experience,
            allowing you to enjoy your favorite dishes from the comfort of your
            home or office. Lorem ipsum dolor sit amet consectetur adipiscing
            elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit
            amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
            Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
            Vestibulum auctor ornare leo, non suscipit magna interdum eu.
            Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
            amet. Pellentesque commodo lacus at sodales sodales
          </p>
        </div>
        <div className="bg-gray-700 w-full h-[1011px] flex flex-col ">
          <h1 className="text-white text-4xl font-sans font-semibold text-center p-10">
            Our Story
          </h1>
          <div className="flex justify-evenly  items-center p-4">
            <p className="text-white text-lg w-[666px] h-[242px]">
              [Food Delivery Website Name] was born out of a shared love for
              great food and the desire to bring delightful culinary experiences
              to everyone. As avid foodies ourselves, we understand the joy that
              comes from savoring a perfectly cooked meal, and we wanted to
              share that joy with our community. Lorem ipsum dolor sit amet
              consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
              urna. Pellentesque sit amet sapien fringilla, mattis ligula
              consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam
              quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit
              magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
              ante fermentum sit amet. Pellentesque commodo lacus at sodales
              sodales
            </p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqjHH5FPJzqOQpPZnv2av0IKPT5UosklhYu4RXUE0o84sZNPcpn_FSkSjb2e6jnNMN-2g&usqp=CAU"
              alt=""
              className="w-[448px] h-[284px] rounded-3xl"
            />
          </div>
          <h1 className="text-white text-4xl font-sans font-semibold text-center p-10">
            Our Team
          </h1>
          <div className="flex justify-evenly items-center p-4">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20240329/pngtree-teamwork-goals-strategy-business-support-concept-image_15664860.jpg"
              alt=""
              className="w-[488px] h-[286px] rounded-3xl"
            />
            <p className="w-[612px] h-[264px] text-white">
              Behind the scenes, we have a dedicated team of chefs, delivery
              experts, and customer support specialists who work tirelessly to
              ensure that every aspect of your food delivery experience is
              top-notch. Our chefs are experts in their respective cuisines, and
              they take pride in crafting mouthwatering dishes that cater to a
              wide range of tastes and preferences. Lorem ipsum dolor sit amet
              consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
              urna. Pellentesque sit amet sapien fringilla, mattis ligula
              consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam
              quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit
              magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
              ante fermentum sit amet. Pellentesque commodo lacus at sodales
              sodales
            </p>
          </div>
        </div>
        <h1 className="text-4xl font-semibold font-sans text-center pt-5">
          Our Promise
        </h1>
        <div className="flex justify-evenly items-center p-5">
          <p className="w-[698px] h-[220px]">
            We believe that food should not only be delicious but also made with
            high-quality, fresh ingredients. That's why we partner with local,
            trusted restaurants that share our commitment to excellence. From
            traditional comfort food to international delicacies, we offer an
            extensive menu that caters to all kinds of cravings. Lorem ipsum
            dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam
            in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
            ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
            Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
            suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
            maximus ante fermentum sit amet. Pellentesque commodo lacus at
            sodales sodales
          </p>
          <img
            src="https://t4.ftcdn.net/jpg/02/67/95/99/360_F_267959978_mg8IbiXMiL636E8GgZP2RC7zaCrMOLF1.jpg"
            alt=""
            className="w-[350px] h-[350px] rounded-3xl"
          />
        </div>
        <h1 className="text-4xl font-semibold font-sans text-center pt-5">
          Fast and Reliable Delivery
        </h1>
        <div className="flex justify-evenly items-center p-5">
          <img
            src="https://img.freepik.com/premium-vector/bike-food-delivery_1302235-4140.jpg"
            alt=""
            className="w-[564px] h-[370px] rounded-3xl"
          />
          <p className="w-[557px] h-[242px]">
            We understand that when hunger strikes, you want your food delivered
            promptly. Our efficient delivery team works tirelessly to ensure
            that your order reaches you as quickly as possible, without
            compromising on the quality of your meal. Lorem ipsum dolor sit amet
            consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
            urna. Pellentesque sit amet sapien fringilla, mattis ligula
            consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam
            quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit
            magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante
            fermentum sit amet. Pellentesque commodo lacus at sodales sodales
          </p>
        </div>
        <div className="bg-gray-700 h-[599px] w-full flex flex-col">
          <h1 className="text-white text-4xl text-center p-6 font-sans font-semibold">
            User-Friendly Platform
          </h1>
          <div className="flex justify-evenly items-center p-12">
            <p className="text-white w-[647px] h-[220px]">
              Navigating through our website is a breeze. We've designed a
              user-friendly platform that allows you to browse through our
              diverse menu, customize your order, and place it in just a few
              simple steps. You can also save your favorite items for easy
              reordering and explore special offers and discounts. Lorem ipsum
              dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam
              in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
              ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
              Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
              suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
              maximus ante fermentum sit amet. Pellentesque commodo lacus at
              sodales sodales
            </p>
            <img
              src="https://media.licdn.com/dms/image/v2/D4D12AQHWkFKbSh-vsA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1693472474699?e=2147483647&v=beta&t=Mugqhnh_rKYz7FIxkQxxbKPFNuUm3Ciz5TlUMsyFApM"
              alt=""
              className="w-[295px] h-[374px] rounded-3xl"
            />
          </div>
        </div>
        <h1 className="text-center font-semibold text-3xl p-5">
          Community and Feedback
        </h1>
        <div className="flex justify-evenly items-center p-5">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20190927/pngtree-we-want-your-feedback-banner-image_318074.jpg"
            alt=""
            className="w-[350px] h-[350px] rounded-3xl"
          />
          <p className="w-[698px] h-[220px]">
            At [Food Delivery Website Name], we cherish our relationship with
            our customers. Your satisfaction is our top priority, and we value
            your feedback to improve our services continually. Whether you have
            a suggestion, concern, or compliment, we encourage you to reach out
            to us, and we promise to listen attentively. Lorem ipsum dolor sit
            amet consectetur adipiscing elit Ut et massa mi. Aliquam in
            hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
            ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
            Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
            suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
            maximus ante fermentum sit amet. Pellentesque commodo lacus at
            sodales sodales
          </p>
        </div>
      </div>
      <h1 className="font-semibold font-sans text-4xl text-center p-5">
        Thank you for choosing [Food Delivery Website Name]. We look forward to
        serving you soon!
      </h1>
      <h3 className="text-2xl font-sans font-medium p-5 ml-5">
        Bon Appétit!
        <br />
        The [Food Delivery Website Name] Team
      </h3>
    </div>
  );
};

export default About;
