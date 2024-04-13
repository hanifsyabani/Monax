import React from "react";

const Footer = () => {
  return (
    <footer className="mt-32 bg-primary rounded-tr-[5rem] lg:px-3 py-6 shadow-2xl px-4">
      <div className="lg:flex justify-evenly">
        <div>
          <h1 className="text-xl font-extrabold">MONAX</h1>
          <p className="pt-6 max-w-sm">
            We strive to deliver exceptional value to our customers in every
            interaction.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-10 grid-cols-3 mt-4 lg:mt-0 ">
          <div>
            <h1 className="text-purple-500 font-bold">Product</h1>
            <ul className="mt-5 font-bold">
              <li className="mb-2 cursor-pointer hover:text-purple-700 text-sm">
                Overview
              </li>
              <li className="mb-2 cursor-pointer hover:text-purple-700 text-sm">
                Features
              </li>
              <li className="mb-2 cursor-pointer hover:text-purple-700 text-sm">
                Pricing
              </li>
              <li className="mb-2 cursor-pointer hover:text-purple-700 text-sm">
                Release
              </li>
              <li className="mb-2 cursor-pointer hover:text-purple-700 text-sm">
                Solutions
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-purple-500 font-bold">Company</h1>
            <ul className="mt-5 font-bold">
              <li className="mb-2 cursor-pointer hover:text-purple-700 text-sm">
                About us
              </li>
              <li className="mb-2 cursor-pointer hover:text-purple-700 text-sm">
                Careers
              </li>
              <li className="mb-2 cursor-pointer hover:text-purple-700 text-sm">
                Press
              </li>
              <li className="mb-2 cursor-pointer hover:text-purple-700 text-sm">
                News
              </li>
              <li className="mb-2 cursor-pointer hover:text-purple-700 text-sm">
                Contact
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-purple-500 font-bold">Resource</h1>
            <ul className="mt-5 font-bold">
              <li className="mb-2 cursor-pointer hover:text-purple-700 text-sm">
                Blog
              </li>
              <li className="mb-2 cursor-pointer hover:text-purple-700 text-sm">
                Newsletter
              </li>
              <li className="mb-2 cursor-pointer hover:text-purple-700 text-sm">
                Events
              </li>
              <li className="mb-2 cursor-pointer hover:text-purple-700 text-sm">
                Support
              </li>
              <li className="mb-2 cursor-pointer hover:text-purple-700 text-sm">
                Help center
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-purple-500 font-bold">Social</h1>
            <ul className="mt-5 font-bold">
              <li className="mb-2 cursor-pointer hover:text-purple-700 text-sm">
                Facebook
              </li>
              <li className="mb-2 cursor-pointer hover:text-purple-700 text-sm">
                Instagram
              </li>
              <li className="mb-2 cursor-pointer hover:text-purple-700 text-sm">
                LinkedIn
              </li>
              <li className="mb-2 cursor-pointer hover:text-purple-700 text-sm">
                Twitter
              </li>
              <li className="mb-2 cursor-pointer hover:text-purple-700 text-sm">
                Dribble
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-purple-500 font-bold">Legal</h1>
            <ul className="mt-5 font-bold">
              <li className="mb-2 cursor-pointer hover:text-purple-700 text-sm">
                Terms
              </li>
              <li className="mb-2 cursor-pointer hover:text-purple-700 text-sm">
                Privacy
              </li>
              <li className="mb-2 cursor-pointer hover:text-purple-700 text-sm">
                Cookies
              </li>
              <li className="mb-2 cursor-pointer hover:text-purple-700 text-sm">
                License
              </li>
              <li className="mb-2 cursor-pointer hover:text-purple-700 text-sm">
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-center text-xs xl:text-sm text-[#aaaaaa]">
          Copyright © 2023 created by{" "}
          <a
            href="https://github.com/hanifsyabani "
            className="hover:text-white"
          >
            Muhammad Hanif Sya bani
          </a>
          . All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
