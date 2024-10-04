
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div >
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className=' flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquam, vitae iure porro vero ipsam doloribus voluptates? Rerum illum corrupti sint quas, enim iure praesentium dolores, officia minus sapiente odio!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit facere, sunt consequuntur nostrum ducimus pariatur illo magnam earum voluptatum? Molestiae eligendi corrupti porro, deleniti impedit neque! Eveniet optio quibusdam quidem.</p>
          <b className=' text-gray=800'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rem, odit alias accusantium nihil excepturi ut eaque expedita maxime id modi quos voluptatibus aspernatur? Possimus maiores hic optio esse quod.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb:20'>
        <div className='border px-10  md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficient</b>
          <p>sit soluta eum nostrum officia excepturi kdkfjba in qui debitis.</p>
        </div>
        <div className='border px-10  md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficient</b>
          <p>sit soluta eum nostrum officia excepturi sed in qui debitis.</p>
        </div>
        <div className='border px-10  md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficient</b>
          <p>sit soluta eum nostrum officia excepturi sed in qui debitis.</p>
        </div>
      </div>
    </div>
  )
}

export default About