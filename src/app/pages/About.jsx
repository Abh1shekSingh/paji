import Image from 'next/image';
import React from 'react'

const About = React.forwardRef((_props, ref) => {
  return (
    <section ref={ref} className=' h-screen bg-[var(--color-dark)] rotate-5 scale-[0.5] rounded-t-3xl flex justify-center items-center'>
        <div className='flex justify-center items-center gap-10'>
          <div className='overflow-hidden rounded-md hover:rotate-3 transition all duration-800'>
            <Image src="/developer/abhishek-1.webp" alt='developer-about' width={400} height={400} className='hover:scale-125 hover:grayscale transition all duration-800'/>
          </div>
          <div className='w-1/2 text-white'>
            <h2 className='heading indent-25 text-5xl leading-13 font-bold'>
              A <span className='heading italic underline'>Software Engineer</span> by day, a web wizard by night and a <span className='heading italic underline'>shutterbug</span> whenever the light's just right.
            </h2>
            <h2 className='subheading text-2xl mt-10 leading-9 font-medium opacity-80'>
               Based in <span className='heading italic underline'>India</span>, I navigate the digital realm with the same precision I apply to brewing the perfect masala chai. I build websites that don't just look good they work (usually).And when I'm not wrestling with CSS or arguing with JavaScript, you'll find me capturing moments through my lens proving that even engineers have a creative side... a slightly caffeinated one.
            </h2>
          </div>
        </div>
    </section>
  )
});

export default About