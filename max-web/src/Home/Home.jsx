import React from 'react'
import imag from '../assets/computerglasses.jpg'
import imag1 from '../assets/eyeglasses.jpg'
import imag2 from '../assets/sunglasses.jpg'
import imag3 from '../assets/reading.jpg'
import { Link } from 'react-router-dom'
import '../index.css'
import Slideimage from './Slideimage'
import Footer from './Footer'

function Home() {
  return (
    <div className='h-screen w-full '>
      <Slideimage />
      <div className="overflow-hidden h-[30vh] flex items-center w-full bg-linear-to-bl from-gray-500 via-gray-700 to-gray-950">
        <div className="whitespace-nowrap animate-scroll">
          <h3 className="inline-block text-5xl text-amber-900 px-10">
            THIS IS AN OFFER • THIS IS AN OFFER • THIS IS AN OFFER •
          </h3>
        </div>
      </div>
      <div className='h-[70vh] w-full  flex items-center  flex-col  mt-3 didone-font '>
        <h2 className='text-[32px] text-shadow-black bg-linear-to-r from-red-900 to-red-400 bg-clip-text text-transparent '>Shop By Category</h2>
        <div className='h-[80%] w-full flex items-center justify-center space-x-2 '>
          <div className='h-[90%] w-[24%]  flex items-center justify-center flex-col'>
            <div className='h-[70%]  w-[90%]'>
              <img src={imag} className='h-full rounded-4xl  shadow-2xl' />
            </div>
            <h3 className='text-[28px] text-gray-500'>Sunglasses</h3>
          </div>
          <div className='h-[90%] w-[24%]  flex items-center justify-center flex-col'>
            <div className='h-[70%]  w-[90%]'>
              <img src={imag1} className='h-full rounded-4xl shadow-2xl' />
            </div>
            <h3 className='text-[28px] text-gray-500'>Computer glasses</h3>
          </div>
          <div className='h-[90%] w-[24%]  flex items-center justify-center flex-col'>
            <div className='h-[70%]  w-[90%]'>
              <img src={imag2} className='h-full rounded-4xl shadow-2xl' />
            </div>
            <h3 className='text-[28px] text-gray-500'>Reading glasses</h3>
          </div>
          <div className='h-[90%] w-[24%]  flex items-center justify-center flex-col'>
            <div className='h-[70%]  w-[90%]'>
              <img src={imag3} className='h-full rounded-4xl shadow-2xl' />
            </div>
            <h3 className='text-[28px] text-gray-500'>Eye glasses</h3>
          </div>
        </div>
      </div>
      <div className='h-[80vh] w-full  '>
        <div className='w-full flex items-center m-2'  >
          <p className='p-1 w-6  bg-teal-400'></p><h1 className='ml-2 text-3xl font-black text-teal-400 '>Who We Are</h1></div>
        <div className='h-[60%] w-full flex items-center justify-center flex-col'>
          <div className='h-[40%] w-full flex items-centerrounded-3xl bg-gray-100'>

            <h2 className='text-4xl m-2'>Five Years of  <span className='fantasy text-4xl ml-6 '>Seeing Clearly</span></h2>

          </div>
          <div className='h-[50%] w-full flex items-center justify-center m-2'>
            <p className='text-3xl text-gray-700 leading-relaxed '>Since 2019, Max Vision Optical Center has been setting the standard for eye care in our community. We're not just an optical
              shop — we're a team of passionate vision experts who believe everyone deserves to see the world at its very best.</p>
          </div>
        </div>
        <div className='h-[30%] w-full '>
          <div className='h-full w-full flex items-center justify-center space-x-10'>
            <div className='h-[90%] w-[18%] s bg-teal-600 rounded-2xl'>
              <div className='h-full  w-[95%] rounded-2xl bg-white flex items-start justify-center flex-col m-0.5 '>
                <h2 className='text-2xl m-2 font-bold'> Certified Experts</h2>
                <p className='text-xl ml-2  text-gray-700 leading-relaxed'>Board-certified optometrists with decades of combined experience</p>
              </div>
            </div>
            <div className='h-[90%] w-[18%] s bg-teal-600 rounded-2xl'>
              <div className='h-full  w-[95%] rounded-2xl bg-white flex items-start justify-center flex-col m-0.5 '>
                <h2 className='text-2xl m-2 font-bold'>  Advanced Tech</h2>
                <p className='text-xl ml-2  text-gray-700 leading-relaxed'>Board-certified optometrists with decades of combined experience</p>
              </div>
            </div>
            <div className='h-[90%] w-[18%] s bg-teal-600 rounded-2xl'>
              <div className='h-full  w-[95%] rounded-2xl bg-white flex items-start justify-center flex-col m-0.5 '>
                <h2 className='text-2xl m-2 font-bold'>Premium Brands</h2>
                <p className='text-xl ml-2  text-gray-700 leading-relaxed'>Board-certified optometrists with decades of combined experience</p>
              </div>
            </div>
            <div className='h-[90%] w-[18%] s bg-teal-600 rounded-2xl'>
              <div className='h-full  w-[95%] rounded-2xl bg-white flex items-start justify-center flex-col m-0.5 '>
                <h2 className='text-2xl m-2 font-bold'> Same-Day Lens</h2>
                <p className='text-xl ml-2  text-gray-700 leading-relaxed'>Board-certified optometrists with decades of combined experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='h-[75vh] w-full mt-5 mb-5 bg-black'>
        <div className='h-full w-full m-4 flex items-center justify-between '>
          <div className='h-[80%] w-[40%] flex items-center justify-center flex-col'>
            <h3 className='text-4xl mr-20 text-amber-300'>OUR <span className='text-teal-400 text-4xl'> SERVICES</span></h3>
            <p className='text-[32px] text-gray-600'>From your first eye exam to picking your perfect frame
              we provide end-to-end vision care with technology and heart. Every service is designed around your unique eyes.</p>
          </div>
          <div className=' h-[90%] w-[50%] flex justify-center' >
            <div className=' h-full w-[45%]'>
              <div className='h-[25%] w-full border-b-3 border-b-gray-600 flex items-end rounded-br-2xl text-white'><p className='text-2xl '>01
                Comprehensive Eye Examination
                Diagnostics</p></div>
              <div className=' h-[26%] w-full border-b-3 border-b-gray-600 flex items-end rounded-br-2xl text-white'><p className='text-2xl'>03
                Contact Lens Fitting & Trial
                Contact Lenses</p></div>
              <div className=' h-[26%] w-full border-b-3 border-b-gray-600 flex items-end rounded-br-2xl text-white'><p className='text-2xl'>05
                Anti-Glare & Blue-Light Lens Coating
                Lens Tech</p></div>
            </div><hr className=' bg-gray-600 h-full  p-0.5' />
            <div className=' h-full w-[45%]'>
              <div className=' h-[35%] w-full border-b-3 border-b-gray-600 flex items-end rounded-bl-2xl text-white'><p className='text-2xl '>02
                Designer Frame Styling & Fitting
                Eyewear</p></div>
              <div className=' h-[30%] w-full border-b-3 border-b-gray-600 flex items-end rounded-bl-2xl text-white'><p className='text-2xl'>04
                Pediatric & Children's Vision Care
                Kids</p></div>
              <div className=' h-[30%] w-full border-b-3 border-b-gray-600 flex items-end rounded-bl-2xl text-white'><p className='text-2xl'>06
                Low Vision Therapy & Assessment</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[70vh] w-full  flex items-center  flex-col  mt-3 didone-font '>
        <h2 className='text-[32px] text-shadow-black bg-linear-to-r from-red-900 to-red-400 bg-clip-text text-transparent '>New Arrivals</h2>
        <div className='h-[80%] w-full flex items-center justify-center space-x-2 '>
          <div className='h-[90%] w-[24%]  flex items-center justify-center flex-col'>
            <div className='h-[70%]  w-[90%]'>
              <img src={imag} className='h-full rounded-4xl  shadow-2xl' />
            </div>
            <h3 className='text-[28px] text-gray-500'>Sunglasses</h3>
          </div>
          <div className='h-[90%] w-[24%]  flex items-center justify-center flex-col'>
            <div className='h-[70%]  w-[90%]'>
              <img src={imag1} className='h-full rounded-4xl shadow-2xl' />
            </div>
            <h3 className='text-[28px] text-gray-500'>Computer glasses</h3>
          </div>
          <div className='h-[90%] w-[24%]  flex items-center justify-center flex-col'>
            <div className='h-[70%]  w-[90%]'>
              <img src={imag2} className='h-full rounded-4xl shadow-2xl' />
            </div>
            <h3 className='text-[28px] text-gray-500'>Reading glasses</h3>
          </div>
          <div className='h-[90%] w-[24%]  flex items-center justify-center flex-col'>
            <div className='h-[70%]  w-[90%]'>
              <img src={imag3} className='h-full rounded-4xl shadow-2xl' />
            </div>
            <h3 className='text-[28px] text-gray-500'>Eye glasses</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}


export default Home