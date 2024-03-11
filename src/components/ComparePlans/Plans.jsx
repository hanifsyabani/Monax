import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Plans = ({ plan }) => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:px-[2%] px-[5%] lg:gap-4 gap-10">
      {plan.map((plans) => (
        <div
          className="bg-white p-4 shadow-xl lg:w-72 md:w-52 w-full rounded-md"
          key={plans.id}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div>
            <h1 className="lg:text-xl text-lg font-bold">{plans.level}</h1>
            <h1 className="lg:text-3xl text-xl font-bold mt-3">${plans.price}</h1>
            <p className="text-gray-400 text-sm">
              No creadit card details required
            </p>
          </div>
          <div className="mt-4">
            <h1 className="font-bold mb-2">For {plans.for}</h1>
            <div className="flex items-center gap-2 mb-2">
              <FaCheck size={20} className="text-green-500" />
              <p>Storage 10 Gb</p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <FaCheck size={20} className="text-green-500" />
              <p>Customer Support via Email</p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <FaCheck size={20} className="text-green-500" />
              <p>Number of Users : 1</p>
            </div>
            <button className="bg-black rounded-md text-white p-2 w-full mt-6 hover:bg-gray-400">
              Get Started
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plans;
