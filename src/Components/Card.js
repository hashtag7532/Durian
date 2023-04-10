import React from "react";
export default function Card (props)

{
    return( 
       <div key={props.Metascore} className=" shadow-l hover:shadow-green-600 hover:shadow-md border-2  rounded-xl w-[300px] h-[400px] flex flex-col items-center  justify-top  "  >
        <img src={props.Img}   alt="Error" className="rounded-lg w-[300px] h-[200px] text-black " 
          />
        <h2 className="font-mono text-xl text-black flex">{props.name}</h2>
        <section className="flex flex-wrap gap-4">
        <p className="text-black"> Price:₨{props.price}</p>
        <p className="text-black"> Country : {props.country}</p>
        <h4 className="text-black"> Rating :{props.rate}⭐️</h4>
        <button className="bg-red-500 hover:bg-blue text-white font-bold py-2 px-4 rounded">Add Item</button></section>
       </div>
    )
}