'use client'

import React, { useEffect } from "react";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const Featured = () => {

  useEffect(() =>{
    AOS.init();
  })
  const chatTo = [
    {
      id: 1,
      title: "Chat to sales",
      description: "Speak to our friendly team.",
      icon: <MdOutlineEmojiEmotions size={25} className="text-purple-500" />,
      button: "Chat to sales",
      delay: 200
    },
    {
      id: 2,
      title: "Chat to support",
      description: "We're here to help.",
      icon: <FaRegComments size={25} className="text-purple-500" />,
      button: "Chat to support",
      delay: 400
    },
    {
      id: 3,
      title: "Visit us",
      description: "Visit our office HQ.",
      icon: <FaLocationDot size={25} className="text-purple-500" />,
      button: "Get directions",
      delay: 600
    },
    {
      id: 4,
      title: "Call us",
      description: "Mon-Fri from 8am to 5pm.",
      icon: <IoCallOutline size={25} className="text-purple-500" />,
      button: "Call our team",
      delay : 800
    },
  ];

  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 px-[5%] lg:gap-10 gap-5 mt-10">
      {chatTo.map((item) => {
        return (
          <div className="lg:w-64 border-2 border-gray-300 rounded-xl p-6" key={item.id} data-aos='flip-left' data-aos-delay={item.delay}>
            <div className="bg-purple-200 rounded-xl p-2 w-10 flex justify-center">
              {item.icon}
            </div>
            <div className="lg:pt-14 pt-3">
              <h1 className="lg:text-xl text-lg font-bold">{item.title}</h1>
              <p className="py-4">{item.description}</p>
              <button className="px-4 py-2 border border-gray-300 rounded-md font-bold text-gray-600 hover:border-purple-500">
                {item.button}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Featured;
