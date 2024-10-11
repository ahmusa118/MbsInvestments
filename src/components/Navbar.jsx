import React,{useState} from 'react'
import { navLinks } from '../constants'
import { Mbslogo, Close, Menu } from '../assets'
import './ind.css'
import { SectionWrapper } from './hoc';
import { motion,AnimatePresence } from 'framer-motion';
import { fadeIn } from './hoc/utils/motion';
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('');
const navigate=useNavigate()
  const handleNavLinkClick = (navTitle, navId) => {
 setTimeout(()=>{setToggle(false)},5000)
    setActive(navTitle);

    const targetElement = document.getElementById(navId);
   
    if (targetElement) {
   
 
      const offsetTop = targetElement.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });}
      else if(navId=='team'){
        navigate('/team')
              }
    
  }

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
        delay: 0.5,
      },
    },
  };
  return (
    <AnimatePresence>
    <motion.div variants={fadeIn("down", "tween", 0.2, 1)} >
        <div className="flex justify-center items-center ">
      <div className="m-2 hidden sm:flex w-full flex-row justify-between shadow-2xl p-1 text-[#faf9f6]" style={{ backgroundColor: 'rgba(211, 211, 211, 0.6)' }}>
        <img src={Mbslogo} alt="logo" className="h-10 w-15 items-center" />
        <div className="flex flex-row gap-2 cursor-pointer items-center" style={{ fontFamily: 'louis' }}>
          {navLinks.map((nav) => (
            <p key={nav.id} onClick={()=>handleNavLinkClick(nav.name,nav.id)} className={`hover:text-red-200 transition ease-in duration-400 ${nav.id === 'contact' ? 'bg-white text-gray-600 p-1' : ''}  ${active==nav.name?'text-red-500':''}`}>
              {nav.name}
            </p>
          ))}
        </div>
      </div>
      </div>

<div className='sm:hidden flex p-1 m-2 justify-between items-center' div style={{ backgroundColor: 'rgba(211, 211, 211, 0.6)' }}>
<img src={Mbslogo} alt="logo" className="h-10 w-15 " />
<img
            src={toggle ? Close : Menu}
            alt="menu"
            className="w-[38px] h-[38px] object-contain cursor-pointer block sm:hidden   border rounded p-2 border-red-100  "
            onClick={() => setToggle(!toggle)}
          />
</div>

</motion.div>
<div className="sm:hidden flex flex-1 z-1000">
         

         <AnimatePresence >
              {toggle && (
               <motion.div
               variants={item}
               initial={{height:0,opacity:0}}
               animate={{height:'100vh',opacity:1}}
               transition={{duration:.3}}
               exit='exit'
     
                // className={`flex p-6 bg-black absolute top-20 right-0  my-10 w-full  sidebar  transition all duration-500 ease-in-out z-10`}
               >
                <div className='bg-black '>
             
     
     
             <div className='absolute top-20 right-[40%]  '>
     <ul className="list-none flex justify-end items-start flex-1 flex-col ">
     {navLinks.map((nav, index) => (
      
       <li
         key={nav.id}
         className={` cursor-pointer transition duration-500 ease-in-out nav ${
           active === nav.title ? 'text-[#da9100]' : 'text-dimWhite'
         } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
         data-text={`\u00A0${nav.name}`}
         onClick={() => {handleNavLinkClick(nav.name, nav.id), setActive(nav.name)}
      
       }
       >
         &nbsp;{nav.name}&nbsp;
        
       </li>
     
     ))}
     
       </ul>
     
     </div>
     
     
     
     
     
         
                 </div> 
                
               </motion.div>
     
              )} 
              </AnimatePresence>
             </div>
</AnimatePresence>
  );
};

export default SectionWrapper(Navbar,'navbar')



