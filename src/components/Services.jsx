

{/*import React, { useState,useEffect } from 'react';

import { SectionWrapper } from './hoc';


import { Carousel } from 'antd';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Mbslogo } from '../assets';
import { features } from '../constants';
import {motion}  from 'framer-motion'
import './styles.css'

import { fadeIn,textVariant } from './hoc/utils/motion';

import { useNavigate } from 'react-router-dom';

const TimeCard=({index,item})=>{

 
  return(
    <VerticalTimelineElement
    index={index}
    position={index % 2 === 0 ? "left" : "right"}  // Alternates position
    textClassName={{ fontWeight: 100, color: '#000000' }}
    contentStyle={{ background: 'rgba(211, 211, 211, 0.1)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #000000' }}
    date="2011 - present"
    iconStyle={{ background: '#fff', color: '#fff', cursor: 'pointer' }}
    icon={<img src={Mbslogo} className='rounded-full h-full w-full' />}
    iconOnClick={() => alert(item.title)}
  >

    <div className=' mb-6 font-thin grid sm:grid-cols-2'>
      <div>
      <h3 className='text-red-500 font-semibold text-2xl'>{item.title}</h3>
      <p className='font-roboto text-justify font-thin text-[#faf9f6]' style={{ fontWeight: 100, fontFamily: 'louis' }}>{item.content}</p>
      </div>
      <div>
        <img src={item.bg} className='m-2 mt-5 sm:mt-14' alt='image' />
        {/** stock images go here 
      </div>
    </div> 

    {/* Optional Carousel code here 
  </VerticalTimelineElement>
  )
}
const FeatureCard = ({ images,title,content,index }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const truncatedContent = content.slice(0, 150);
  const remainingContent = content.slice(150);

  return (
    <motion.div variants={fadeIn('right','spring',0.5*index,0.75)} className="group flex justify-center text-center relative overflow-hidden rounded-xl  cursor-pointer">

      <img
        src={images[0]}
        alt="An image"
        className="rounded-xl object-cover ease-in-out duration-500 group-hover:scale-125 w-full sm:w-[500px] m-2 p-4 transition-all"
      />



      <div className="absolute w-full h-full group-hover:bg-black group-hover:opacity-80 transition-all duration-500" />

      <h3 className='absolute top-3 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out font-roboto text-red-300 text-xl'>
        {title}
      </h3>


      <h3 className="p-3 text-justify absolute top-10 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out " style={{fontFamily:'louis'}}>
        {showFullContent ? content : truncatedContent}
        {content.length > 150 && !showFullContent && (
          <span className="text-[#da9100] cursor-pointer" onClick={() => setShowFullContent(true)}>
            {' '}
            Read more...
          </span>
        )}
        {content.length > 150 && showFullContent && (
          <span className="text-[#da9100] cursor-pointer" onClick={() => setShowFullContent(false)}>
            {' '}
            Read less
          </span>
        )}
      </h3>

    </motion.div>
  );
};



const Services = () => {

  const [page,setPage]=useState('')


;
 // ... (your imports and other code)

if (page === 'slider') {
  return (
    <div className='px-4 outline-none font-thin text-lg'>
      <h1 className='md:text-center text-2xl p-2 font-semibold font-roboto text-red-500'>List of Services</h1>
      <VerticalTimeline className='block sm:hidden'>   
      {features.map((item, index) => (
           <TimeCard item={item} index={index} />
      ))}
  </VerticalTimeline>  

<VerticalTimeline  

className='hidden sm:block'>       

{features.map((item, index) => (
 <TimeCard item={item} index={index} />
))}
     
 
    </VerticalTimeline>



    </div>
  );
} 
 else 
  {
  return (
    <div>
      <div className=' relative'>
       
        <div className=''>
<h1 className=' px-4 font-semibold text-2xl pt-2 font-roboto text-red-500'>List of services</h1>
<div className='grid sm:grid-cols-3' onClick={()=>setPage('slider')}> 
  {features.map((feat,index)=>(<FeatureCard {...feat} index={index} />))}
</div>
         
        </div>
      </div>
    </div>
  )
}
};

export default SectionWrapper(Services,'services');*/}
import React from 'react'
import {motion}  from 'framer-motion'

import { fadeIn} from './hoc/utils/motion';
import { SectionWrapper } from './hoc';
import { Carousel } from 'antd'
import { features } from '../constants';
const FeatureCard = ({ images,title,content,index,bg,id }) => {


  return (
    <motion.div variants={fadeIn('right','spring')} className='text-[#faf9f6] font-netflixm font-thin grid sm:grid-cols-2'>
<div className=''>
  <h1 className='text-white text-left text-xl '>
    {title}
    </h1>
    <p className='mb-2 text-base'>{content}</p>
  
  </div>
 
     <img src={bg} className={`${id=='abujacarlogistics'||'abujacar'?'sm:h-80 ml-auto':''}`} alt='img' />
    </motion.div>
  );
};
const Services = () => {

  return (
    <div className=' p-2 sm:p-10'>
      <h1 className='font-netflixm text-md text-[#faf9f6] text-left '>List of Services</h1>

   <Carousel autoplay >
     {features.map((feat,index)=>(<FeatureCard {...feat} index={index} />))}
   </Carousel>
 

   </div>
  )
}

export default SectionWrapper(Services,'services')











        