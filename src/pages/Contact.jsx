import React from 'react'
import { assets } from '../assets/assets'
const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Our OFFICE</p>
          <p className='text-gray-500'>123 Willms station <br />suite 350,washinton ,USA</p>
          <p className='text-gray-500'>Tel:+91 0123456789<br /> Email: example@gmail.com</p>
          <p className='font-semibold text-lg'>Carres at ForgeX</p>
          <p className='text-gray-500'>Learn more about resource booking.</p>
        </div>
      </div>

    </div>
  )
}

export default Contact