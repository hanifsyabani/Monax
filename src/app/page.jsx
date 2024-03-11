"use client";

import Image from "next/image";
import bg1 from "@/assets/bg1.jpg";
import bg2 from "@/assets/bg2.jpg";
import Link from "next/link";
import vector from "@/assets/vector.jpg";
import people1 from "@/assets/people1.jpg";
import people2 from "@/assets/people2.JPG";
import people3 from "@/assets/people3.jpg";
import vector2 from "@/assets/vector2.jpg";
import Footer from "@/components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="bg-gradient-to-r from-primary via-white via-50% to-primary">
      <section
        className="flex flex-col items-center pt-10"
        data-aos="fade-down"
      >
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-wide">
          Business Teams
        </h1>
        <div className="flex items-center justify-center gap-6">
          <div className="rounded-full lg:w-28 lg:h-14 w-20 h-10">
            <Image
              src={bg1}
              width={100}
              height={100}
              alt="bg"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <h1 className="font-extrabold lg:text-6xl text-4xl tracking-wide">
            Around
          </h1>
          <div className="rounded-full lg:w-28 lg:h-14 w-20 h-10">
            <Image
              src={bg2}
              width={100}
              height={100}
              alt="bg"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-wide">
          Analytical Work
        </h1>
      </section>

      <hr className="border border-gray-300 mt-24" />

      <section className="lg:flex justify-evenly pb-10">
        <div className="mt-10 text-center" data-aos="fade-right" data-aos-delay="300" >
          <h1 className="font-bold text-2xl tracking-wide ">
            Modern data stack
          </h1>
          <p className="max-w-xs my-4 mx-auto">
            The investment you've made in every layer of the stack, by getting
            data you've made meaningful into everyone's
          </p>
          <Link
            href={"/"}
            className="text-sm underline font-semibold hover:text-blue-400"
          >
            READ MORE
          </Link>
          <div className="mt-20">
            <Image
              src={bg1}
              alt="bg"
              width={100}
              height={100}
              className="rounded-full w-44 h-20 object-cover lg:ml-4 mx-auto"
            />
            <p className=" mt-2">Modern Business Intelligence</p>
          </div>
        </div>
        <div className="relative flex flex-col justify-center ">
          <div className="bg-white absolute lg:-top-8 top-52 lg:left-[5.5rem] rounded-full w-52 z-10 py-2 px-6 border border-gray-300 left-24">
            <button
              className="bg-black px-5 py-3  rounded-full text-white w-full hover:bg-gray-900 transition-all"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              Try for free
            </button>
          </div>
          <div data-aos="fade-up" data-aos-delay="500" className="mt-20 lg:mt-0">
            <Image
              src={vector}
              alt="bg"
              width={1000}
              height={1000}
              className="w-96 h-96 object-cover rounded-3xl"
            />
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="300" >
          <div className="flex items-center gap-2 lg:mt-20 mt-10 justify-center lg:justify-start">
            <div className="flex items-center">
              <Image
                src={people1}
                width={100}
                height={100}
                className="w-10 h-10 rounded-full object-cover"
              />
              <Image
                src={people2}
                width={100}
                height={100}
                className="w-10 h-10 rounded-full object-cover"
              />
              <Image
                src={people3}
                width={100}
                height={100}
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div className="font-semibold">
              <p>Connect</p>
              <p>More Experts</p>
            </div>
          </div>
          <div className="mt-24 flex items-center lg:justify-start justify-center gap-4">
            <div>
              <h1 className="font-extrabold text-4xl">120 +</h1>
              <p className="max-w-[8rem] pt-2">
                Perform complex ad hac analysis and empower
              </p>
            </div>
            <Image
              src={vector2}
              width={100}
              height={100}
              className="w-32 h-44 rounded-3xl"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
