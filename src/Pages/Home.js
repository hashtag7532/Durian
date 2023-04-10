import React from 'react'
import Womentthinfood from '../Animations/Womenthinkfood.json'
import Lottie from 'lottie-react'
import Filter from './Filter'
import Deliv from '../Animations/Delivery.json'
import Footer from '../Components/Footer'
import  { useState } from 'react'
const Home = () => {
   const [search, setsearch]=useState("");
  return (
    <>
    <div className=' grid h-screen bg-meragreen ' >
   <div className='flex items-top justify-center mt-[80px]  '>
    <div className='mt-[100px]'>
    <h1 className='text-8xl  text-white font-gilroy tracking-wide'>Authentic Home<br/> food in Vellore</h1>
    <p className='text-xl  text-white '>E@tzoo is a courier service in which authentic home home cooked food<br/> is delivered to customer </p>
    <div className='flex mt-4 rounded'>
    <input placeholder='  Pizza' className='w-[400px]  text-black' value={search} onChange={event => setsearch(event.target.value)} ></input>
   <button className="bg-blue-500 hover:bg-yellow-700 text-white font-bold py-3 px-4 ">Search</button>
    </div>
    </div>
    <div className='w-[550px]'>
    <Lottie animationData={Womentthinfood} /> 
  </div>
  </div>
    </div>
    <Filter/>
    <div className='flex items-top m-9  justify-around '>
        <div className='ml-[150px] mt-[40px]'>
            <h1 className="font-mono text-8xl text-cyan">Our Fast<br/><p className='font-mono text-8xl text-blue'>Delivery</p> For you </h1>
        </div>
        <div className='w-[650px] '>
    <Lottie animationData={Deliv} /> 
  </div>
    </div>
    <Footer />
    </>
  )
}

export default Home