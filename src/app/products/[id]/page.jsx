import products from '@/components/Product/DataProduct'
import HeaderProduct from '@/components/Product/HeaderProduct';
import Image from 'next/image';
import React from 'react'

const page = ({params}) => {

  const id = params.id;

  const title = products[id -1].title;
  const desc = products[id-1].description

  return (
    <div className='bg-gradient-to-r from-primary via-white via-50% to-primary px-[5%] pt-32'>
      <HeaderProduct title={title}/>
      <div>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default page