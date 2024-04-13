"use client";

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");

  useEffect(() =>{
    let prev  = window.pageYOffset;
    const handleScroll =() =>{
      const current = window.scrollY;
      setNav(current===0 || current< prev);
      prev = current;
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  },[])

  return (
    <>
      <div className={`${nav ? "top-0" : "-top-20"} flex justify-between items-center py-4 px-[5%] bg-gradient-to-r from-primary via-white via-50% to-primary lg:hidden fixed w-full  z-30`}>
        <Link href={"/"}>
          <h1 className="font-extrabold text-2xl">Monax</h1>
        </Link>
        <AiOutlineMenu size={25} onClick={onOpen} className="cursor-pointer"/>
      </div>
      {/* Desktop */}

      <nav className={`${nav ? "top-0" : "-top-20"} fixed py-4 px-[5%] shadow-xl lg:flex justify-between items-center bg-gradient-to-r from-primary via-white via-50% to-primary hidden transition-all w-full z-30`}>
        <Link href={"/"}>
          <h1 className="font-extrabold text-2xl">Monax</h1>
        </Link>
        <div className="flex justify-center items-center gap-8">
          <Link href={"/"} className="hover:text-purple-600 transition-all">
            <p>Home</p>
          </Link>
          <Link
            href={"/products"}
            className="hover:text-purple-600 transition-all"
          >
            <p>Products</p>
          </Link>
          <Link
            href={"/compareplans"}
            className="hover:text-purple-600 transition-all"
          >
            <p>Compare Plans</p>
          </Link>
          <Link
            href={"/about"}
            className="hover:text-purple-600 transition-all"
          >
            <p>About Us</p>
          </Link>
        </div>
        <Link
          href={"/contact"}
          className="bg-gray-900 py-2 px-6 rounded-full text-white hover:bg-gray-600 "
        >
          <button>Contact us</button>
        </Link>
      </nav>

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <h1 className="text-2xl font-extrabold px-4 py-2">MONAX</h1>
          <DrawerCloseButton />
          <DrawerBody>
            <nav className="flex flex-col gap-5 mb-10">
              <Link
                href={"/"}
                className="hover:text-purple-600 transition-all"
              >
                <p className="text-xl">Home</p>
              </Link>
              <Link
                href={"/products"}
                className="hover:text-purple-600 transition-all"
              >
                <p className="text-xl">Products</p>
              </Link>
              <Link
                href={"/compareplans"}
                className="hover:text-purple-600 transition-all"
              >
                <p className="text-xl">Compare Plans</p>
              </Link>
              <Link
                href={"/about"}
                className="hover:text-purple-600 transition-all"
              >
                <p className="text-xl">About Us</p>
              </Link>
            </nav>
            <Link
              href={"/contact"}
              className="bg-gray-900 py-2 px-6 rounded-full text-white hover:bg-gray-600 "
            >
              <button>Contact us</button>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
