"use client";
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
const subheading = [
    "A Software Engineer by day, a web wizard by night,", 
    "and a shutterbug whenever the light's just right. Based",
    "in India, I navigate the digital realm with the same", 
    "precision I apply to brewing the perfect masala chai. I", 
    "build websites that don't just look good, they work", 
    "(usually).And when I'm not wrestling with CSS", 
    "or arguing with JavaScript, you'll find me capturing ,", 
    "moments through my lens proving that even engineers ", 
    "have a creative side... a slightly caffeinated one"
  ];
const MaskText = () => {
    const phraseRef = useRef([]);
    const bodyRef = useRef(null)
    useEffect(() => {

        phraseRef.current.forEach((phraseEle, index) => {        
            gsap.to(phraseEle, {
                y:0, 
                scrollTrigger: {
                    trigger:bodyRef.current,
                    start:"top+=400vh top", 
                    end:"top+=900vh top",
                    scrub:1,
                },
                delay:index*2,
                duration:10,
                ease:"power3.out",
            })
        })
        return () => {
            phraseRef.current.forEach(el => {
              ScrollTrigger.getById(el)?.kill();
            });
            ScrollTrigger.clearScrollTriggers();
            gsap.killTweensOf(phraseRef.current);
            phraseRef.current = [];
          };
    },[subheading])
  return (
    <div >
        {

        subheading.map( (phrase, index) => {

          return <div ref={bodyRef} key={index} className='overflow-hidden'>

            <p 
                ref={el => (phraseRef.current[index] = el)} 
                className='translate-y-[100%] subheading tracking-wider text-[var(--color-light)] md:text-[35px] text-[7vw] opacity-70 text-center font-semibold' 
                dangerouslySetInnerHTML={{ __html: phrase }}
                />

          </div>

        })

      }
    </div>
  )
}

export default MaskText