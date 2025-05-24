

import Image from 'next/image'
import React from 'react'

const Card = ({title, copy, index}) => {
  return (
    <div className='sticky top-0 services text-white relative md:px-7' id={`card-${index + 1}`}>
        <div className='service-inner relative  w-[100%] will-change-transform h-screen p-[2em] flex flex-col md:flex-row '>
            <div className='flex-3'>
                <h1 className='subheading text-5xl md:text-7xl 2xl:text-[12rem] font-semibold md:leading-25 2xl:leading-45 mb-7 2xl:mb-25'>{title}</h1>
                <p className='subheading font-light text-2xl md:text-4xl 2xl:text-[4rem]'>{copy}</p>
            </div>
            <div className='flex-1 w-[100%] overflow-hidden cover aspect-video h-[30%]'>
                <Image src={`/projects/card-${index + 1}.jpg`} alt={title} width={500} height={500} className='text-[4rem] font-semibold leading-10 mb-[4rem] md:mb-[2.5em]' />
            </div>
        </div>
    </div>
  )
}

export default Card