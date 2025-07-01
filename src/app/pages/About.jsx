import React from 'react'
import Copy from '../components/Copy'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  
  return (
    <section className='px-8 py-14 w-[100%] text-white min-h-screen  bg-[var(--color-dark)]'>
      <Copy>
        <h1 className='heading text-[2.25rem] mb-4 2xl:mb-20 2xl:text-[7rem] leading-13 md:leading-30 2xl:leading-tight font-bold uppercase'>Developer <span className='opacity-70 italic'>,</span> Photographer.</h1>
      </Copy>
      <div className='grid grid-cols-3 gap-7  2xl:gap-14'>
        <div className='overflow-hidden w-full col-span-3 2xl:col-span-1 rounded-lg grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer '>
          <Image src={`/developer/abhishek-about.webp`} alt='developer-image-standing with railing' width={300} height={300} className='hover:scale-[1.1] transition-all duration-500 ease-in-out' />
        </div>
        <div className='col-span-3 2xl:col-span-2 '>
        <Copy>
          <h1 className='text-white font-semibold text-[1.5rem] 2xl:text-[3rem] subheading leading-8 2xl:leading-15 mb-10'>Howdy! I'm Abhishek, and I build compelling websites that help brands shine online.</h1>
          <p className='subheading font-light text-[1.15rem] 2xl:text-[1.75rem] 2xl:w-3/4 opacity-70'>When I'm not crafting digital experiences, you'll find me immersed in the beauty of nature, capturing its essence through my <span className='heading italic'>lens</span>. This portfolio is where my passion for intuitive web design meets my love for the natural world.</p>
          <p className='subheading font-light text-[1.15rem] 2xl:text-[1.75rem] 2xl:w-3/4 opacity-70 mt-[1rem]'>Explore more about hobby and passion on <span className='italic font-bold'><Link href={`https://www.instagram.com/paji.shots?igsh=YzBzMWt4Nzh3MHVo`} target='_blank' rel='noopener noreferrer'>Instagram</Link></span> and <span className='italic font-bold'><Link href={`https://www.linkedin.com/in/craftingbugs`} rel='noopener noreferrer' target='_blank'>Linkedin</Link></span>.</p>
        </Copy>
        </div>
      </div>
    </section>
  )
}

export default About