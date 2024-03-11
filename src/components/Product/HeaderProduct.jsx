'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";

const HeaderProduct = ({title}) => {

  const router = useRouter();

  const goBack=()=>{
    router.back();
  }

  return (
    <div className='pt-6 flex items-center gap-4'>
      <button onClick={goBack} className='bg-purple-500 p-2 rounded-full'>
        <IoMdArrowRoundBack size={20} className='text-white'/>
      </button>
      <h1 className='text-3xl font-bold'>{title}</h1>
    </div>
  )
}

export default HeaderProduct