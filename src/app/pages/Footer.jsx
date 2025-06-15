import React from 'react'

const Footer = () => {
  return (
    <footer className=' relative h-[600px]' style={{clipPath:"polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}>
      <div className='w-full'></div>
      <div className='fixed bottom-0 h-[600px] w-full'>
        <div className='px-7 py-14 text-dark h-screen w-full text-light flex flex-col 2xl:justify-center bg-[var(--color-dark)] heading'>
          <div className='grid grid-cols-3 gap-20'>
            <h1 className='text-[1.5rem] 2xl:text-[2rem] col-span-3 2xl:col-span-2 2xl:w-3/5'>Bringing <span className='heading opacity-70 italic'>visions</span> to life, whether in code or through a camera's eye.</h1>
            <div className='col-span-3 2xl:col-span-1'>
              <p className='mb-4 heading border-b-1 py-2  text-[1.5rem] 2xl:text-[2rem] opacity-70'>Explore</p>
              <ul className='flex flex-col gap-4 subheading text-[1.15rem]'>
                <li>Photography</li>
                <li>Instagram</li>
                <li>Linkedin</li>
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