import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FrontEnd() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])
  return (
    <div id='FrontEnd' className='p-20 flex flex-col items-center justify-center'>
      <h1 data-aos="fade-right" className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Front-End</h1>
      <div className='grid lg:grid-cols-4 mf:grid-cols-1 justify-around gap-20'>
        <img data-aos="fade-up" className='text-[26px] flex items-center justify-center rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="React" srcset="" />
        <img data-aos="fade-down" className='text-[26px] flex items-center justify-center rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg" alt="HTML" srcset="" />
        <img data-aos="fade-up" className='text-[26px] flex items-center justify-center rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg" alt="CSS" srcset="" />
        <img data-aos="fade-down" className='text-[26px] flex items-center justify-center rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" srcset="" />
      </div>
    </div>
  )
}
