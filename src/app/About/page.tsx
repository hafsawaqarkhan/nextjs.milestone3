import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div><>
   <div className="relative flex flex-col-reverse md:flex-row items-start 
   md:items-center justify-between px-8 py-12 md:px-16 lg:px-24">
  <div className="z-10 max-w-full md:max-w-lg">
    <h3 className="font-medium text-[36px] md:text-[54px] leading-[44px] md:leading-[64px] mb-6">
      Our Story</h3>
    <p className="text-gray-700 text-sm md:text-base mb-4">
      Launched in 2024, Exclusive is Pakistan’s premier coffee shop  with an
      active presence in Dubai. Supported by a wide range of flavours, options, and service
      solutions, Exclusive has 10,500 sellers , serving 3 million customers across the region.
    </p>
    <p className="text-gray-700 text-sm md:text-base">
      Exclusive offers more than 1 million products and is growing rapidly. The platform provides a
      diverse assortment of coffee with its different varieties .
    </p>
  </div>
  <div className="relative w-full md:w-auto flex justify-center md:justify-end mb-8 md:mb-0">
    <Image
      src="/image/aboutbg.jpg"
      alt="Our Story"
      width={800}
      height={800}
      className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
    />
  </div>
</div>

</>
   

    </div>
  )
}

export default page
