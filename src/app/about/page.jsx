"use client";

import React, { useEffect } from "react";
import about1 from "@/assets/about1.jpg";
import about2 from "@/assets/about2.jpg";
import about3 from "@/assets/about3.jpg";
import about4 from "@/assets/about4.jpg";
import who from "@/assets/who.jpg";
import Image from "next/image";
import HeaderAbout from "@/components/About/HeaderAbout";
import ceo1 from "@/assets/ceo1.png";
import ceo2 from "@/assets/ceo2.png";
import ceo3 from "@/assets/ceo3.png";
import MessageForm from "@/components/About/MessageForm";
import Featured from "@/components/About/Featured";
import Footer from "@/components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <section className="bg-primary h-screen rounded-bl-[10rem] lg:flex items-center relative pt-20 ">
        <div className="lg:w-1/2 lg:pl-[5%] px-4 lg:px-0">
          <h1
            className="lg:text-5xl text-3xl font-extrabold text-center lg:text-left"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            ABOUT MONAX
          </h1>
          <p className="mt-4" data-aos="zoom-out" data-aos-delay="300">
            Welcome to Monax! We are a leading technology company dedicated to
            empowering businesses with innovative solutions. At Monax, our
            mission is to simplify complexity and drive digital transformation
            for our clients.
          </p>
        </div>
        <div>
          <Image
            src={about1}
            alt="about"
            width={1000}
            height={1000}
            className="absolute lg:w-72 rounded-tl-[3rem] rounded-b-[3rem] lg:h-52 object-cover lg:top-20 w-52 h-32 top-[22rem] left-5 lg:left-[45rem]"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
            loading="lazy"
          />
          <Image
            src={about2}
            alt="about"
            width={500}
            height={500}
            className="absolute w-52 rounded-tl-[3rem] h-72 object-cover right-0 top-10 hidden lg:block"
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-duration="1000"
            loading="lazy"
          />
          <Image
            src={about3}
            alt="about"
            width={500}
            height={500}
            className="absolute w-52 rounded-tl-[3rem] h-72 object-cover right-80 top-80 hidden lg:block"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            loading="lazy"
          />
          <Image
            src={about4}
            alt="about"
            width={500}
            height={500}
            className="absolute w-72 rounded-tl-[3rem] rounded-b-[3rem] h-52 object-cover lg:right-0 top-[32rem] lg:top-[23rem] right-4"
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-duration="1000"
            loading="lazy"
          />
        </div>
      </section>
      <section className="px-10 lg:px-0">
        <HeaderAbout
          title={"Who are We?"}
          description={
            "We're a passionate team at Monax, dedicated to delivering technology innovations that help businesses reach their full potential."
          }
        />
        <div className="mt-6">
          <Image
            src={who}
            width={500}
            height={500}
            className="mx-auto"
            data-aos="zoom-out"
            data-aos-delay="500"
            data-aos-duration="1000"
            loading="lazy"
          />
          <h1
            className="font-bold text-center text-2xl max-w-xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            we work hard every day to deliver unrivaled value to our customers.
          </h1>
        </div>
      </section>
      <section className="mt-44">
        <HeaderAbout
          title={"Meet Our Team"}
          description={"We Grow Businesses Online. Period."}
        />
        <div className="flex flex-wrap justify-center mt-6 gap-20">
          <div
            className="w-60 h-80 shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="900"
          >
            <div className="bg-gray-100 w-full relative">
              <Image
                className="w-64 h-52 object-cover"
                src={ceo2}
                width={500}
                height={500}
                alt="seo"
                loading="lazy"
              />
              <div className="absolute bg-white p-2 rounded-full text-xs right-0 bottom-0">
                Carissa Angel
              </div>
            </div>
            <div className="bg-[#DEE6CD] py-2 px-2">
              <h1 className="text-xl font-semibold">01</h1>
            </div>
            <div className="bg-gray-200 p-3">
              <h1 className="text-xl font-semibold">Custom SEO Services</h1>
              <p className="pt-3">
                Custom, organic SEO services that include technical audits,
                on-page search engine optimization
              </p>
            </div>
          </div>
          <div
            className="w-80 pt-20"
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-duration="900"
          >
            <div className="bg-gray-100 w-full relative">
              <Image
                className="w-64 h-52 object-cover"
                src={ceo1}
                width={500}
                height={500}
                alt="seo"
                loading="lazy"
              />
              <div className="absolute bg-white p-2 rounded-full text-xs right-0 bottom-0">
                Ahmad Subarjo
              </div>
            </div>
            <div className="bg-[#DEE6CD] py-2 px-2">
              <h1 className="text-xl font-semibold">02</h1>
            </div>
            <div className="bg-gray-200 p-3">
              <h1 className="text-xl font-semibold">Custom SEO Services</h1>
              <p className="pt-3">
                Custom, organic SEO services that include technical audits,
                on-page search engine optimization
              </p>
            </div>
          </div>
          <div
            className="w-60 h-80 shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="900"
          >
            <div className="bg-gray-100 w-full relative">
              <Image
                className="w-64 h-52 object-cover"
                src={ceo3}
                width={500}
                height={500}
                alt="seo"
                loading="lazy"
              />
              <div className="absolute bg-white p-2 rounded-full text-xs right-0 bottom-0">
                Rifki Zundi
              </div>
            </div>
            <div className="bg-[#DEE6CD] py-2 px-2">
              <h1 className="text-xl font-semibold">03</h1>
            </div>
            <div className="bg-gray-200 p-3">
              <h1 className="text-xl font-semibold">Custom SEO Services</h1>
              <p className="pt-3">
                Custom, organic SEO services that include technical audits,
                on-page search engine optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-44">
        <HeaderAbout
          title={"Get in Touch"}
          description={
            "We are always open to discussing new projects, creative ideas, or opportunities to be part of your visions."
          }
        />
        <Featured />
        <MessageForm />
      </section>

      <section className="mt-44">
        <div className="lg:flex justify-evenly items-center text-center lg:text-left">
          <div>
            <h1 className="text-3xl font-bold">Start your 30-day free trial</h1>
            <p className="pt-4">
              Join over 4.000+ startups already growing with Untlited.
            </p>
          </div>
          <div className="flex items-center justify-center lg:justify-start mt-4 lg:mt-0 gap-5">
            <button className="px-4 py-2 border border-gray-400 rounded-xl hover:border-purple-600">
              Learn More
            </button>
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-300 rounded-xl text-white">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Page;
