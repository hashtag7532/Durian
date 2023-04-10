import React from 'react'
import Footer from '../Components/Footer';
import Naman from '../Images/Naman.png';
import Parth from '../Images/Parth.png';
import Anubhav from '../Images/Anubhav.png';
import error from '../Images/error.png';

const About = () => {
  return (
    <div className='grid h-cover bg-meragreen'>
    <br/>
    <div className='grid place-items-center'>
    <p className="font-bold text-6xl text-yellow-600">E@tzoo</p>
    <div>
      <p className='text-yellow-600 px-[200px] text-xl py-5'>
      Eatzoo is a convenient and hassle-free food ordering website that allows students to order food and takeaway from their favorite local restaurants and cafes. With Eatzoo, students no longer have to wait in long lines to get their food, as they can easily order their meals online and pick them up at their convenience.

The website features a user-friendly interface that allows students to browse through a wide range of food options from different restaurants and cafes. They can filter their search results based on their preferences, such as cuisine type, dietary requirements, price range, and more. Once they find the food they want to order, they can add it to their cart, choose their preferred pickup time, and complete their payment securely.

Eatzoo also provides a seamless and efficient ordering process for students. They can place their orders in advance and avoid the long wait times that often come with ordering food during peak hours. They can also track their orders in real-time and receive notifications when their food is ready for pickup.

In addition to its convenient ordering process, Eatzoo also offers a range of benefits for students. The website often provides special discounts and deals on selected restaurants, helping students save money on their food expenses. It also allows them to discover new and exciting food options in their local area, encouraging them to try new cuisines and flavors.

Overall, Eatzoo is a great product for students who want to save time and avoid the hassle of waiting in long lines to get their food. With its user-friendly interface, efficient ordering process, and range of benefits, Eatzoo makes it easy and convenient for students to order their favorite meals and takeaway from their preferred restaurants and cafes.
      </p>
    </div>
    <div className='grid '>
     <p className="font-bold text-6xl text-yellow-600"> Meet our Team</p>
<div className='grid grid-flow-col-2'>
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col items-center pb-5 mt-3">
        <img class="w-28 h-30 mb-2 rounded-full shadow-lg" src={Anubhav} alt=""/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span class=" text-gray-500 dark:text-gray-400 text-xl"> Anubhav <br/> Software Developer</span>
    </div>
</div>
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col items-center pb-5 mt-3">
        <img class="w-28 h-28 mb-2 rounded-full shadow-lg" src={Naman} alt=""/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span class=" grid place-item-center text-xl">
          Naman Jain <br/>
          Visual Designer/UI and UX</span>
    </div>
</div>
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col items-center pb-5 mt-3">
        <img class="w-28 h-28 mb-2 rounded-full shadow-lg" src={Parth} alt=""/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span class=" text-xl">
        Parth Dodia <br/> Developer</span>
    </div>
</div>

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col items-center pb-5 mt-3">
        <img class="w-28 h-28 mb-2 rounded-full shadow-lg" src={error} alt=""/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span class=" text-gray-500 dark:text-gray-400 text-xl"> Gunishta Doomra <br/> Logo and UI/UX</span>
    </div>
</div>
</div>

    </div>
    </div>
    <Footer/>
    </div>
  )
}
export default About