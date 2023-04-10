import cart from '../Images/carticon.png'
import { Outlet, Link } from "react-router-dom";
const Header = () => {
  return (
   <>
    <div className=" bg-meragreen py-6 px-5 flex flex-wrap items-center justify-between mx-auto">
      <div className="flex justify-between items-center">
      <Link to="/" className="font-bold text-3xl text-yellow-600">E@tzoo</Link>
      </div>
      <div className="flex flex-wrap">
      <Link to="/" className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-yellow-600 hover:text-gray-700 transition-colors duration-300">Home</Link>
        <Link to="/About" className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-yellow-600 hover:text-gray-700 transition-colors duration-300">About</Link>
        <Link to="/Blogs" className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-yellow-600 hover:text-gray-700 transition-colors duration-300">Blog</Link>
        <Link to="/Contacts" className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-yellow-600 hover:text-gray-700 transition-colors duration-300">Contact</Link>
      </div>
      <div className='bg-yellow-600 rounded-3xl '>
        <button><img  className='w-[50px]' src={cart} alt="error"></img></button>
      </div>
    </div>
   <Outlet />
   </>
  )
}

export default Header