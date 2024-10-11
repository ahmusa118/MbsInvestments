import React from 'react'
import { merc, cadi,  rr } from '../assets'
import { SectionWrapper } from './hoc'
const Partners = () => {
  return (
    <div>
<ol className='ol2 mt-5 ol3 '>
<div className="px-2 flex  justify-between col-span-4 my-auto">
  <img src={merc} alt='merc' className='size-14 pb-2'/>
  <img src={cadi} alt='cadi' className='size-18'/>
 <img src={rr} alt='logo' className='size-10'/>
      </div>

  
</ol>

    </div>
  )
}

export default SectionWrapper(Partners,'partners')