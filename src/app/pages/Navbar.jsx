"use client";
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
const Navbar = () => {

  const navbarRef = useRef(null);

  useEffect(() => {
    gsap.to(navbarRef.current, {
      y:0,
      opacity:1,
      duration:2.5,
      ease:"power3.out"
    })
  },[]);


  return (
    <nav ref={navbarRef} className='-translate-y-15 opacity-0 absolute top-0 z-998 mix-blend-difference text-white w-full px-12 py-4 flex justify-between items-center'>
        <div className='flex justify-between items-center gap-15'>
          <h1 className='heading md:text-[2.5vw] text-[6vw]'>Abhishek<sup>&copy;</sup></h1>
          <p className='subheading'>Web Developer & Designer</p>
        </div>
        <div className='hidden sm:block'>
            <ul className='subheading flex items-center justify-center gap-6'>
              <li>Home</li>
              <li>Work</li>
              <li>Photography</li>
              <li>Social</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar