import React from 'react'
import Copy from '../components/Copy'

const About = () => {
  
  return (
    <section className='px-14 text-white h-screen flex justify-center items-center bg-[var(--color-dark)]'>
      <Copy>
        <h1 className='text-white font-semibold text-5xl subheading opacity-70 tracking-wider leading-14'>Howdy! I'm Abhishek, and <span className='bg-[#8f00ff] rounded-lg'>I build</span> compelling websites that help clients and brands shine online. When I'm not crafting digital experiences, you'll find me immersed in the beauty of nature, capturing its essence through my <span className='bg-[#ffea00] rounded-lg text-dark'>lens</span>. This portfolio is where my passion for intuitive web design meets my love for the natural world. Let's create something remarkable together.</h1>
      </Copy>
    </section>
  )
}

export default About