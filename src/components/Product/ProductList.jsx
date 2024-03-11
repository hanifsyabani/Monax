"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const ProductList = ({ product }) => {

  useEffect(() =>{
    AOS.init();
  })

  return (
    <>
      <div className="grid lg:grid-cols-4 grid-cols-2 mt-8 lg:px-[5%] px-2 lg:gap-6 gap-3 mx-auto">
        {product.map((product) => (
          <div
            className="lg:w-64 w-44 rounded-lg shadow-xl cursor-pointer"
            data-aos="zoom-in"
            data-aos-delay="300"
            key={product.id}
            layoutId={product.id}
            onClick={() => setSelected(product.id)}
          >
            <Image
              src={product.image}
              width={200}
              height={200}
              alt="product"
              className="w-full lg:h-44 h-32 object-cover rounded-lg mx-auto"
            />
            <div className="p-3">
              <h1 className="mt-4 font-semibold lg:text-lg text-base">{product.title}</h1>
              <p className="text-gray-600 text-sm lg:text-base">
                {product
                  ? product.description.length > 50
                    ? product.description.slice(0, 50) + "..."
                    : product.description
                  : null}
              </p>
              <Link href={`/products/${product.id}`}>
                <button className="text-white font-bold bg-gradient-to-b from-purple-500 via-purple-800 via-50% to-purple-900 p-2 rounded-md mt-8 hover:bg-gradient-to-t transition-all">
                  Show More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
