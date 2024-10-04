import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            {/* left Section */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam nemo voluptates totam provident sapiente, excepturi quidem cupiditate unde distinctio commodi consequuntur at rerum nobis omnis possimus, animi laborum soluta odit.</p>
            </div>

            {/* center Section */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>RESOURCES</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
            </div>

            {/* right Section */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 0123456789</li>
                    <li>example@gmail.com</li>
                </ul>
            </div>
            
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright @2024</p>
        </div>
    </div>
  )
}

export default Footer