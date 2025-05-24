"use client";
import React from 'react';
import Card from '../components/Card';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);


const Services = React.forwardRef((_props, ref) => {

    const cardsData = [
     { title: 'Web Designing', copy: 'We craft your website with stunning looks and effortless user experience. We make it pretty so people stick around.' },
     { title: 'Web Development', copy: 'We code the brains behind your website, making everything actually work. It is like magic, but with more debugging and less sleep.' },
   ];
   
        

    return (
        <section ref={ref} className='min-h-screen w-[100%] bg-[var(--color-dark)] sm:rotate-5 sm:scale-[0.5] rounded-t-3xl'>
            <h1 className='text-[12vw] text-[var(--color-light)] uppercase heading px-7 font-bold tracking-wider'>Services</h1>
            {cardsData.map((card, index) => (
                <Card key={index} {...card} index={index}/>
            ))}
        </section>
    );
});


export default Services;
