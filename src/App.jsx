import React from 'react';
import {  Team, Footer,Scroll,Partners, Contact, Services, Hero, Navbar, Aboutpage, Slider, Quote, Login, Verify,BuyToken,UploadCar,Sellersignup, Forgotsellerpassword  } from './components';
import { BrowserRouter,Routes,Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
  
    <Route path='/' element={<>
    <div className="">
      {/* Hero Section with background image */}
      <div className='overflow-hidden bg-black bg-no-repeat  bg-cover relative z-10'>
        <Navbar />
        <Hero />
      </div>

      {/* Aboutpage Section with gradient background */}
      <div className='bg-gradient'>
        <Aboutpage />
        <Services />
        <Quote />
        <Contact />
        <Partners />
        <Slider />
        <Scroll />
     
        <Footer />
      </div>
    
    </div>
    </>} />
    <Route path='/team' element={<Team />} />
    <Route path='/login' element={<Login />} />
 <Route path='/verify' element={<Verify />} />
 <Route path='/buytoken' element={<BuyToken />} />
 <Route path='/uploadcar' element={<UploadCar />} />

 <Route path='/forgotsellerpassword' element={<Forgotsellerpassword />} />
 <Route path='/sellersignup' element={<Sellersignup />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
