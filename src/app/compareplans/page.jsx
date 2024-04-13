'use client'

import Plans from "@/components/ComparePlans/Plans";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
 
  const dataPlans = [
    {
      id: 1,
      level: "Standart",
      for: "Individual Teams",
      price: "0",
      category : "Montly"
    },
    {
      id: 2,
      level: "Intermediate",
      for: "Small Teams",
      price: "39",
      category : "Montly"
    },
    {
      id: 3,
      level: "Pro",
      for: "Medium Teams",
      price: "119",
      category : "Yearly"
    },
    {
      id: 4,
      level: "Interprise",
      for: "LargeTeams",
      price: "Custom",
      category : "Yearly"
    },
  ];

  useEffect(() =>{
    AOS.init();
  })

  const [plans, setPlans] = useState(dataPlans)

  const filterPlans = (selected) =>{
    const updatePlans = dataPlans.filter((newPlans) => newPlans.category === selected);
    setPlans(updatePlans);
  }

  return (
    <div className="bg-gradient-to-r from-primary via-white via-50% to-primary pb-10 lg:pt-32 pt-20">
      <div className="text-center pt-10">
        <h1 className="text-3xl font-extrabold tracking-wide" data-aos="fade-down">
          Affordable plans for everyone
        </h1>
        <p className="text-gray-400 mt-4 max-w-3xl mx-auto tetx-sm lg:text-base px-4" data-aos="fade-up" data-aos-delay="300">
          Sign up for free plan experience the power of our platform for
          yourself. No credit card required. When you're ready to upgrade, we
          offer flexible pricing plans to fit your budget and business goats.
        </p>
      </div>
      <div className="flex justify-between items-center  my-10 bg-gray-300 rounded-full w-[15rem] mx-auto" data-aos="zoom-out" data-aos-delay="600">
        <button className="font-bold hover:bg-gray-900 hover:text-white  rounded-full p-4" onClick={() => filterPlans("Montly")}>
          Montly
        </button>
        <button className="font-bold hover:bg-gray-900 hover:text-white p-4 rounded-full px-2" onClick={() => filterPlans("Yearly")}>
          Yearly (20% OFF)
        </button>
      </div>
      <Plans plan={plans} />
    </div>
  );
};

export default Page;
