
import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Signup from './Components/Signup.jsx'
import Login from './Components/Login.jsx'
import Aboutsmain from './Page/Aboutsmain.jsx'
// import AboutUs from './Components/AboutUs.jsx'


function App() {
  return (
    <>
     

     <BrowserRouter>
      <Navbar/>
      {/* <AboutUs/> */}
      <Aboutsmain/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/AboutUs" element={<AboutUs/>}/> */}
      </Routes>
    </BrowserRouter>


    </>
  )
}   

export default App;
