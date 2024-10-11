import React from 'react'
import { Carousel } from 'antd';
import { frontgle,Carstand, Carstand2,Carstand4,Carstand5,Carstand6,Carstand8 } from '../assets';
import { SectionWrapper } from './hoc';
import { motion,AnimatePresence } from 'framer-motion';
import { fadeIn } from './hoc/utils/motion';
const Hero = () => {
const images=[Carstand, Carstand2,Carstand4,Carstand5,Carstand6,Carstand8 ]
  
    return (
        <AnimatePresence>
          <motion.div variants={fadeIn("down", "tween", 0.4, 1)}> 

            <div className='grid sm:grid-cols-3 relative'>
            <img src={Carstand4} alt='image' className='col-span-2'/>
<div className='font-netflixm text-[#faf9f6] m-2 bg-black sm:mt-6'>
<h1 className='text-center '>About Us</h1>
<p className='ml-2'>
At MBS Investments, we specialize in providing strategic investment opportunities that deliver long-term growth and financial security. With a focus on the Nigerian market, we offer personalized investment solutions that cater to all.
                <span className=''>Our goal is to help clients build wealth through diversified portfolios, including real estate, stock markets, and emerging sectors. At MBS Investments, we combine deep market insights with a client-first approach, ensuring smart, sustainable, and profitable investment decisions.</span>
</p>
<button className="mx-auto block p-2 border my-2 hover:border-white border-[#da9100] hover:bg-[#faf9f6] hover:text-black transition ease-in duration-500">Let's Go</button>

</div>


          </div>
      {/**
      
  <div  className='m-2 absolute top-[20%]' style={{ backgroundColor: 'rgba(211, 211, 211, 0.6)' }}>
    
        <div className=''>

       
          <div className='grid grid-cols-3 '>
            <div className='col-span-1'>
              <img className=' sm:h-auto' src={frontgle} alt='aboutpage2' />
            </div>
      
            <div className='col-span-2 pb-2 '>
              <div className='sm:text-base text-xs block text-center col-span-1'>
                <h1 className='  text-[#faf9f6] font-netflixb mt-2'>About Us</h1>
                <p className=' px-4 font-netflixm text-[#FAF9F6]' >
                At MBS Investments, we specialize in providing strategic investment opportunities that deliver long-term growth and financial security. With a focus on the Nigerian market, we offer personalized investment solutions that cater to all.
                <span className='hidden sm:block'>Our goal is to help clients build wealth through diversified portfolios, including real estate, stock markets, and emerging sectors. At MBS Investments, we combine deep market insights with a client-first approach, ensuring smart, sustainable, and profitable investment decisions.</span>
                </p>
              </div>
            </div>
          </div>
      </div>
        
        </div>


       */}

      </motion.div>
      </AnimatePresence>
      
      )
  
}

export default SectionWrapper(Hero,'hero')