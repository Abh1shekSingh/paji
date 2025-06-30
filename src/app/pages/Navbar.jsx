"use client";
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Link from 'next/link';
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
          <h1 className='heading font-bold tracking-tight md:text-[2.5vw] text-[6vw]'>artistry</h1>
          {/* <p className='subheading'>artistry </p> */}
        </div>
        <div className='hidden sm:block'>
            <ul className='subheading flex items-center justify-center gap-6'>
              <Link href={`https://www.linkedin.com/in/craftingbugs`} target='_blank' rel='noopener norefferer'><li>Linkedin</li></Link>
              <Link href={`https://www.instagram.com/paji.shots?igsh=YzBzMWt4Nzh3MHVo`} target='_blank' rel='noopener norefferer'><li>Instagram</li></Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar