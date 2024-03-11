"use client";

import React from "react";
import HeaderAbout from "./HeaderAbout";
import { useFormik } from "formik";
import { useToast } from "@chakra-ui/react";

const MessageForm = () => {

  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      id: 0,
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: async () => {
     
      const { name, email, phone, message } = formik.values;
      const data = { name, email, phone, message };

      const response = await fetch("/api/v1/data", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.status === 200) {
        formik.resetForm();
      }

      toast({
        title: "Success",
        description: result.message,
        status: "success",
      });
    },
  });

  return (
    <div>
      <HeaderAbout
        title={"Message"}
        description={"We'll get back to you within 24 hours."}
      />
      <div className="px-4 lg:flex justify-center ">
        <form className="mt-10" onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              type="text"
              className="focus:outline-none border-2 border-gray-300 rounded-md px-2 py-1 lg:w-[30rem] mt-2 w-full"
              name="name"
              placeholder="Fullname"
              value={formik.values.name}
              onChange={formik.handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="text"
              className="focus:outline-none border-2 border-gray-300 rounded-md px-2 py-1 lg:w-[30rem] mt-2 w-full"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="you@company.com"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="block">
              Phone number
            </label>
            <input
              type="text"
              className="focus:outline-none border-2 border-gray-300 rounded-md px-2 py-1 lg:w-[30rem] mt-2 w-full"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              placeholder="08123xxxxxxx"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="block">
              Message
            </label>
            <textarea
              type="text"
              className="focus:outline-none border-2 border-gray-300 rounded-md px-2 py-1 lg:w-[30rem] h-32 mt-2 w-full"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              placeholder="Leave us a message"
              required
            />
          </div>
          <div>
            <h1 className="font-bold">Service</h1>
            <div className="flex items-center gap-6 mt-4">
              <div>
                <div className="flex items-center gap-2 mb-2 font-semibold lg:text-base text-sm">
                  <input type="checkbox" name="" />
                  <h5>Project Management Software</h5>
                </div>
                <div className="flex items-center gap-2 mb-2 font-semibold lg:text-base text-sm">
                  <input type="checkbox" name="" />
                  <h5>Business Intelligence Platform</h5>
                </div>
                <div className="flex items-center gap-2 mb-2 font-semibold lg:text-base text-sm">
                  <input type="checkbox" name="" />
                  <h5>Cloud-based Accounting Solution</h5>
                </div>
                <div className="flex items-center gap-2 mb-2 font-semibold lg:text-base text-sm">
                  <input type="checkbox" name="" />
                  <h5>Professional Development Courses</h5>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2 font-semibold lg:text-base text-sm">
                  <input type="checkbox" name="" />
                  <h5>Collaboration Tools Suite</h5>
                </div>
                <div className="flex items-center gap-2 mb-2 font-semibold lg:text-base text-sm">
                  <input type="checkbox" name="" />
                  <h5>IT Consulting Services</h5>
                </div>
                <div className="flex items-center gap-2 mb-2 font-semibold lg:text-base text-sm">
                  <input type="checkbox" name="" />
                  <h5>Streaming Platform Plus</h5>
                </div>
                <div className="flex items-center gap-2 mb-2 font-semibold lg:text-base text-sm">
                  <input type="checkbox" name="" />
                  <h5>Fitness Tracker Pro</h5>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-purple-500 w-full py-2 mt-5 text-white font-bold rounded-lg hover:bg-purple-900 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessageForm;
