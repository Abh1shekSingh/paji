"use client";
import React from 'react';
import Card from '../components/Card';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);


const Services = React.forwardRef((_props, ref) => {

    const cardsData = [
  {
    title: 'Build Functionality',
    details: [
      'Write code',
      'Behind website',
      'Make it work',
      'Solve problems'
    ]
  },
  {
    title: 'Create Experience',
    details: [
      'Stunning visuals',
      'User friendly',
      'Make it pretty',
      'Keep people'
    ]
  }
];
   
        

    return (
        <section ref={ref} className='min-h-screen p-10 w-[100%] bg-[var(--color-dark)] sm:rotate-5 sm:scale-[0.5] rounded-t-3xl'>
            <h1 className='text-[3rem] md:text-[6rem] 2xl:text-[7rem] leading-13 md:leading-30 2xl:leading-tight text-[var(--color-light)] uppercase subheading font-bold '>Web Presence, <span className='text-stroke heading font-light tracking-wider'>Perfected.</span></h1>
            <p className='text-white heading text-[1.25rem] mt-5 md:text-[1.5rem] opacity-80 md:text-right ml-auto md:mr-7 2xl:text-[1.5rem] md:w-1/2 2xl:w-1/2 md:mt-14 font-light'>From concept to launch, I build beautiful, functional websites that drive results, ensuring your online presence is not just seen, but remembered and acted upon. We focus on seamless user experiences and robust performance to elevate your brand</p>
            {cardsData.map((card, index) => (
                <Card key={index} {...card} index={index}/>
            ))}
            <div className='w-[100%] mt-[300px] h-300px'></div>
        </section>
    );
});


export default Services;
