

import Image from 'next/image'
import React from 'react'

const Card = ({title, details, index}) => {
  return (
    <div className='sticky top-0 services text-white relative h-[300px]' id={`card-${index + 1}`}>
        <div className='service-inner relative bg-[var(--color-dark)] w-[100%] min-h-screen flex flex-col'>
            <div className='flex gap-2 border-b-1 border-gray-400'>
              <span className='text-[1rem] md:text-[2rem] opacity-50 heading'>0{index + 1}</span>
              {
                index === 0 ? (

                  <h1 className='heading font-bold text-[2rem] md:text-[3.5rem] uppercase'><span className='opacity-70'>Build</span> {title}</h1>
                ):

                  <h1 className='heading font-bold text-[2rem] md:text-[3.5rem] uppercase'><span className='opacity-70'>Create</span> {title}</h1>

              }
            </div>
            <div className='flex justify-between items-center md:px-10 mt-7'>
              <u className='list-none no-underline'>
                {details.map((item, i) => (
                  <li key={i} className='subheading opacity-70 text-[1rem] md:text-[1.5rem]'>{item}</li>
                ))}
              </u>
              <div className='w-[30%] h-[30%] overflow-hidden'>
                <Image src={`/projects/${index + 2}.jpg`} alt='service-images' width={400} height={400}/>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default Card