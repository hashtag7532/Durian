import React, { useState } from 'react'
import Card from '../Components/Card'
import data from '../data/food.json'


const Filter = () => {
  const [first, setfirst] = useState('burgers');
  const Foodlist= data[`${first}`].slice(0, 12).map(rcrd=>{
    return(
      <Card 
      Img={rcrd.img}
      name={rcrd.name}
      price ={rcrd.price}
      rate={rcrd.rate}
      country={rcrd.country}
      />
    )
  })
  const setstate=(event)=>{
    setfirst(event.target.value)
  }
  
  return (
    <div className='grid grid-flow-row justify-center items-center font-mono bg-apnagray mt-9 '>
        <div className='m-auto'>
      <h2 className='text-xl text-black m-auto '> Select a Category</h2>
      <span className='grid grid-flow-col gap-5 border-black border-2 border-solid rounded-xl'>
        <button className=" hover:bg-yellow-700 rounded-xl text-black font-bold py-3 px-4 " onClick={setstate} value="breads">Bread</button>
        <button className=" hover:bg-yellow-700 rounded-xl text-black font-bold py-3 px-4 " onClick={setstate} value="burgers">Burger</button>
        <button className=" hover:bg-yellow-700 rounded-xl text-black font-bold py-3 px-4 " onClick={setstate} value="chocolates">Chocolate</button>
        <button className=" hover:bg-yellow-700 rounded-xl text-black font-bold py-3 px-4 " onClick={setstate} value="desserts">Desert</button>
        <button className=" hover:bg-yellow-700 rounded-xl text-black font-bold py-3 px-4 " onClick={setstate} value="drinks">Drink</button>
        <button className=" hover:bg-yellow-700 rounded-xl text-black font-bold py-3 px-4 " onClick={setstate} value="sandwiches">Sandwiches</button>
        <button className=" hover:bg-yellow-700 rounded-xl text-black font-bold py-3 px-4 " onClick={setstate} value="fried-chicken">Chicken</button>
        <button className=" hover:bg-yellow-700 rounded-xl text-black font-bold py-3 px-4 " onClick={setstate} value="steaks">Steak</button>
        <button className=" hover:bg-yellow-700 rounded-xl text-black font-bold py-3 px-4 " onClick={setstate} value="best-foods">E@tzoo Special</button>
        </span>
      </div>
      <div className='m-9 flex flex-wrap gap-7 justify-center items-center' >
      {Foodlist}
      </div>
  
    </div>
  )
}

export default Filter