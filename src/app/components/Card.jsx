

import Image from 'next/image'
import React from 'react'

const Card = ({title, details, index}) => {
  return (
    <div className='sticky top-0 services text-white relative h-[300px]' id={`card-${index + 1}`}>
        <div className='service-inner relative bg-[var(--color-dark)] w-[100%] min-h-screen flex flex-col'>
            <div className='flex gap-2 border-b-1 border-gray-400'>
              <span className='text-[1rem] md:text-[2rem] opacity-50 subheading'>0{index + 1}</span>
              <h1 className='heading text-[2rem] md:text-[3.5rem] tracking-wide '>{title}</h1>
            </div>
            <div className='flex justify-between items-center md:px-10 mt-7'>
              <u className='subheading list-none no-underline'>
                {details.map((item, i) => (
                  <li key={i} className='subheading text-[1rem] md:text-[1.25rem]'>{item}</li>
                ))}
              </u>
              <div className='w-[30%] h-[30%] overflow-hidden'>
                <Image src={`/projects/${index + 1}.jpg`} alt='service-images' width={400} height={400}/>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default Card