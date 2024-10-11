import React from 'react'

import Socialicons from './Socialicons'
import { fadeIn, slideIn } from './hoc/utils/motion'
import { Icons } from './Menus'
import {Mbslogo} from '../assets'
import { SectionWrapper } from './hoc'
import { motion } from 'framer-motion'
const Footer = () => {
  return (
    <motion.div variants={fadeIn("down", "tween", 0.2, 1)} className=' font-netflixm'>
    <div className='grid sm:grid-cols-3 text-gray-600 '>
<div className='px-2 pt-2'>
  <div className='flex flex-row '>
  <img src={Mbslogo} alt='logo' className='w-[80px] h-[50px] border p-1 border-[#da9100] mt-8 ml-2'/>
  {/*<h1 className='py-12 px-2 font-semibold   text-red-600'>Manga<span className='text-white font-gothamOfficeItalic'>Automobiles</span></h1>*/}
  </div>
  <h3 className=' pl-2    font-netflixm text-sm' >Company with incredible automobile expertise</h3>
</div>


<div className='pt-2 md:mt-12 pl-2 md:mx-auto'>
  <h1 className='text-xl font-semibold pl-2 pb-2'>Contacts</h1>
  <div className='pl-2'>
<div className='pb-4'><h1 className='font-semibold '>Phone</h1>
<h3  className='font-netflixm '>+2348068057552</h3>
</div>
<div className='pb-4'>
<h1 className='font-semibold '>Email</h1>
<h3 className=''>Mbsautos@gmail.com</h3>
</div>
<div className='pb-2'>
  <h1 className='font-semibold'>Address</h1>
  <h3 className=''>Opposite national hospital central area, behind the old filling station, Abuja, Nigeria.</h3>
</div>
  </div>
 </div>
<div className='pt-2 md:mt-12 pl-4 md:mx-auto'>
  <h1 className=' text-xl font-semibold  pb-2'>Social</h1>
  <Socialicons Icons={Icons} /></div>
    </div>
    <hr className='mx-1 my-4'/>
    <div className=' pl-4 mt-6  text-sm text-gray-600 '>
    <span >©️ 2024 Mbs Investments. All rights reserved.</span>
    <span> Terms . Privacy Policy</span>
    </div>
    </motion.div>
  )
}

export default SectionWrapper(Footer,'footer')