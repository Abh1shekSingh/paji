"use client";
import React from 'react';
import Card from '../components/Card';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Copy from '../components/Copy';

gsap.registerPlugin(ScrollTrigger, useGSAP);


const Services = React.forwardRef((_props, ref) => {

    const cardsData = [
  {
    title:  'Functionality',
    details: [
      'Write code',
      'Behind website',
      'Make it work',
      'Solve problems'
    ]
  },
  {
    title: 'Experience',
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
            {/* <Copy> */}
              <h1 className='text-[3rem] md:text-[6rem] 2xl:text-[7rem] leading-13 md:leading-30 2xl:leading-tight text-[var(--color-light)] uppercase heading font-bold w-3/4'>Web Presence, <span className='heading font-bold italic text-light opacity-70'>Perfected.</span></h1>
            {/* </Copy> */}
            {/* <Copy> */}
              <p className='text-white subheading text-[1.25rem] mt-5 md:text-[1.5rem] opacity-80 md:text-right ml-auto md:mr-7 2xl:text-[1.5rem] md:w-3/4 2xl:w-1/2 md:mt-14 font-thin'>From concept to launch, I build beautiful, functional websites that drive results, ensuring your online presence is not just seen, but remembered and acted upon. We focus on seamless user experiences and robust performance to elevate your brand.</p>
            {/* </Copy> */}
            {cardsData.map((card, index) => (
                <Card key={index} {...card} index={index}/>
            ))}
            <div className='w-[100%] mt-[300px] h-300px'></div>
        </section>
    );
});


export default Services;
