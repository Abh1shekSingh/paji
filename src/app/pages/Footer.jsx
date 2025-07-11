import Link from 'next/link'
import React from 'react'
import Copy from '../components/Copy'

const Footer = () => {
  return (
    <footer className=' relative h-[600px]' style={{clipPath:"polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}>
      <div className='w-full'></div>
      <div className='fixed bottom-0 h-[600px] w-full'>
        <div className='px-7 py-14 text-dark h-screen w-full text-light flex flex-col 2xl:justify-center bg-[var(--color-dark)] heading'>
          <div className='grid grid-cols-3 gap-20'>
            <Copy>
              <h1 className='text-[1.5rem] 2xl:text-[2rem] col-span-3 2xl:col-span-2 2xl:w-3/5'>Bringing <span className='heading opacity-70 italic'>visions</span> to life, whether in code or through a camera's eye.</h1>
            </Copy>
            <div className='col-span-3 2xl:col-span-1'>
              <p className='mb-4 heading border-b-1 py-2  text-[1.5rem] 2xl:text-[2rem] opacity-70'>Explore</p>
              <ul className='flex flex-col gap-4 subheading text-[1.15rem]'>
                <Link href='https://www.instagram.com/paji.shots?igsh=YzBzMWt4Nzh3MHVo' target='_blank' rel='noopener noreferrer'><li>Photography</li></Link>
                <Link href={`https://www.instagram.com/_abh1sheksingh?igsh=Y202MWt6dXJiNmln&utm_source=qr`} target='_blank' rel='noopener noreferrer'><li>Instagram</li></Link>
                <Link href={`https://www.linkedin.com/in/craftingbugs`} target='_blank' rel='noopener noreferrer'><li>Linkedin</li></Link>
              </ul>
            </div>
            <div className='col-span-3 w-full flex flex-col justify-between'>
              <h1 className='heading text-[2.25rem] 2xl:text-[2rem]'>Made in <span className='italic text-[#A6B697]'>nature.</span></h1>
              <p className='subheading opacity-70'>I mean why not?</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer