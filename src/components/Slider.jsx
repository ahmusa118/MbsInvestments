import React from 'react';
import { Carousel } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from './hoc/utils/motion';
import { SectionWrapper } from './hoc';
import { Car0, Car1, Car2, Car3, Car4, Car5, Car6 } from '../assets';

const Slider = () => {
  const images = [Car0, Car1, Car2, Car3, Car4, Car5, Car6];

  return (
    <AnimatePresence>
      <motion.div
        variants={fadeIn("down", "tween", 0.2, 1)}
        className="mt-2 grid grid-cols-1 sm:grid-cols-3" // Apply 1 column for all screen sizes, 3 on small and up
      >
        {/* Carousel in the first two columns */}
        <div className="col-span-1 sm:col-span-2">
          <Carousel autoplay>
            {images.map((img, index) => (
              <img key={index} src={img} alt="" className="object-cover" />
            ))}
          </Carousel>
        </div>

        {/* Static content in the third column */}
        <div className="col-span-1 bg-black text-white  p-2 sm:p-4 font-netflixm py-8 sm:py-14">
          <h3 className="text-md  mb-2 text-center">Why Invest with Us?</h3>
          <ul className="list-disc list-inside">
            <li>Proven track record of success in the automotive industry.</li>
            <li>Innovative solutions and customer-focused approach.</li>
            <li>Strong financial growth and stability.</li>
          </ul>
          <button className="mx-auto block p-2 border my-2 hover:border-white border-[#da9100] hover:bg-[#faf9f6] hover:text-black transition ease-in duration-500">Invest with Us</button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SectionWrapper(Slider, 'slider');
