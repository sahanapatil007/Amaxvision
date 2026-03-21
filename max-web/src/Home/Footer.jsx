import React from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'; 
import '../index.css'

function Footer() {
  return (
    <div className='h-[60vh] w-full bg-black'>
       <div className='h-full w-full flex items-center justify-end flex-col'>
         <div className='h-[70%] w-full flex '>
            <div className='h-full w-[50%]'>
              <div className='h-[60%] w-full flex items-center flex-col justify-center'>
                <h1 className='text-teal-400  text-3xl font-black'>MaxVision </h1>
               <div className='h-[60%] w-full  flex items-center  justify-center space-x-2'>
               <i className="ri-instagram-line p-2 h-12 rounded-full bg-white text-3xl hover:scale-105 duration-200"></i>
               <i className="ri-telegram-line p-2 h-12 rounded-full bg-white text-3xl hover:scale-105 duration-200"></i>
               <i className="ri-instagram-line p-2 h-12 rounded-full  bg-white text-3xl hover:scale-105 duration-200"></i>
               <i className="ri-facebook-line p-2 h-12 rounded-full  bg-white text-3xl hover:scale-105 duration-200"></i></div>
              </div>
              <div>
                <form action="" className=' h-[40%] w-full flex items-center justify-center space-x-5 '>
                  <input type="email" name="email" id="email" placeholder='Enter Your Email' className='border-b-2 bg-none border-b-gray-600 w-[50%] h-11 ' required />
                  <button type="submit" className='text-2xl rounded-xl bg-amber-950 p-1'>submit</button>
                </form>
              </div>
            </div><p className='bg-gray-600 p-0.5 h-[90%] rounded-2xl'></p>
            <div className='h-full w-[20%] flex items-center justify-center flex-col'>
              <h2 className='text-2xl text-amber-50'>services</h2>
                <Link className='text-amber-50 text-[20px] '>support</Link>
                <Link className='text-amber-50 text-[20px]'>support</Link>
                <Link className='text-amber-50 text-[20px]'>support</Link>
                <Link className='text-amber-50 text-[20px]'>support</Link>
                <Link className='text-amber-50 text-[20px]'>support</Link>
            </div>
            <div className='h-full w-[20%] flex items-center justify-center flex-col'>
              <h2 className='text-2xl text-amber-50'>services</h2>
                <Link className='text-amber-50 text-[20px]'>support</Link>
                <Link className='text-amber-50 text-[20px]'>support</Link>
                <Link className='text-amber-50 text-[20px]'>support</Link>
                <Link className='text-amber-50 text-[20px]'>support</Link>
                <Link className='text-amber-50 text-[20px]'>support</Link>
            </div>
        </div>
        <div className='h-[15%] w-full bg-amber-500 text-center'>
            <h1 className='text-2xl font-bold mt-2'>Copyright @ 2025</h1>
        </div>
       </div>
    </div>
  )
}

export default Footer