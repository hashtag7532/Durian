import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from './Pages/Contacts';
import Blogs from './Pages/Blogs';
import About from './Pages/About';
import Header from './Components/Header';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="About" element={<About/>}/>
      <Route path="Blogs" element={<Blogs/>}/>
      <Route path="Contacts" element={<Contacts/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App