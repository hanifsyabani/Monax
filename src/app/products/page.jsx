"use client";
import ProductList from "@/components/Product/ProductList";
import React, { useEffect, useState } from "react";
import dataProducts from "@/components/Product/DataProduct";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const page = () => {
  const [products, setProducts] = useState(dataProducts);

  useEffect(() =>{
    AOS.init();
  })

  const filterProduct = (selectedProduct) => {
    // kenapa pakai dataProduct, supaya yang kita set itu data lengkapnya karena kalu ngambil dari state products maka ketika ngeklik yang health misalnya maka ketika pindah ke business maka data nya osong karena tidak lengkap
    const updatedProduct = dataProducts.filter((item) => item.category === selectedProduct);
    setProducts(updatedProduct);
  };

  return (
    <div className="bg-gradient-to-r from-primary via-white via-50% to-primary pb-10">
      <h1 className="text-center font-bold text-3xl pt-10" data-aos='fade-down' data-aos-delay='300'>Our Product</h1>
      <ul className="flex flex-wrap justify-center items-center gap-8 mt-4" data-aos='fade-down' data-aos-delay='500'>
        <li
          className="hover:text-purple-500 cursor-pointer"
          onClick={() => setProducts(dataProducts)}
        >
          All
        </li>
        <li
          className="hover:text-purple-500 cursor-pointer"
          onClick={() => filterProduct("Business")}
        >
          Business
        </li>
        <li
          className="hover:text-purple-500 cursor-pointer"
          onClick={() => filterProduct("Technology")}
        >
          Technology
        </li>
        <li
          className="hover:text-purple-500 cursor-pointer"
          onClick={() => filterProduct("Health")}
        >
          Health
        </li>
        <li
          className="hover:text-purple-500 cursor-pointer"
          onClick={() => filterProduct("Entertainment")}
        >
          Entertainment
        </li>
      </ul>

      <ProductList product={products} />
    </div>
  );
};

export default page;
