'use client'

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeaderAbout = ({ title, description }) => {

  useEffect(() =>{
    AOS.init();
  });

  return (
    <div className="text-center mt-20" data-aos='zoom-in' data-aos-delay='200' data-aos-duration='600'>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="max-w-2xl mx-auto pt-3">{description}</p>
    </div>
  );
};

export default HeaderAbout;
