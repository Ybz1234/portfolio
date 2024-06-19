import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Databases() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])
  return (
    <div id='Databases' className='p-20 flex flex-col items-center justify-center'>
      <h1 data-aos="fade-left" className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Databases</h1>
      <div className='grid lg:grid-cols-2 mf:grid-cols-1 justify-around gap-20'>
        <img data-aos="fade-up" className='text-[26px] flex items-center justify-center rounded-ss-3xl rounded-br-3xl h-36 w-44 p-1 border-2 border-fuchsia-800 b_glow' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" srcset="" />
        <img data-aos="fade-down" className='text-[26px] flex items-center justify-center rounded-ss-3xl rounded-br-3xl h-36 w-44 p-1 border-2 border-fuchsia-800 b_glow' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" alt="Azure SQL Database" srcset="" />
      </div>
    </div>
  )
}
