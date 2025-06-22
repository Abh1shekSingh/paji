"use client"
import React from 'react'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

const Work = () => {
  const container = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = document.querySelectorAll('.card');
    const images = document.querySelectorAll('.card img');
    const totalCards = cards.length;

    gsap.set(cards[0], {y:"0%", scale:1, rotation:0});
    gsap.set(images[0], {scale:1});

    for(let i = 1; i < totalCards ; i++) {
      gsap.set(cards[i], {y:"100%", scale:1, rotation:0});
      gsap.set(images[i], {scale:1});
    }

    const scrollTimeline = gsap.timeline ({
      scrollTrigger: {
        trigger: container.current, 
        start:"top top", 
        end:`+=${window.innerHeight * (totalCards - 1)}`,
        pin:true, 
        scrub:0.5
      }
    })

    for(let i= 0 ; i < totalCards - 1 ; i++) {
      const currentCard = cards[i];
      const currentImage = images[i];
      const nextcard = cards[i + 1];

      const pos = i;

      scrollTimeline.to(currentCard, {
        scale:0.5, 
        rotation:10, 
        duration:1, 
        ease:"none"
      }, pos
    )
    scrollTimeline.to(
      currentImage, {
        scale:1.5, 
        duration:1, 
        ease:"none",
      }, pos
    )

    scrollTimeline.to(
      nextcard, {
        y:"0%", 
        duration:1, 
        ease:"none", 
      }, pos
    )
    
    }
    return() => {
      scrollTimeline.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }
  }, {scope:container})

  
  return (
    <section ref={container} className='work text-white min-h-svh overflow-hidden flex bg-[var(--color-white)] justify-center items-center'>
      <div className='cards-container relative w-[70%] h-[70%] overflow-hidden rounded-xl'>
        <div className='card'>
          <div className='tag'>
            <p>Craftzblog</p>
          </div>
          <div>
            <Link href={`https://craftzblog.vercel.app/`}>
              <img src={'/projects/blogapp.webp'} alt='one' width={500} height={500} />
            </Link>
          </div>
        </div>
        <div className='card'>
          <div className='tag'>
            <p>Portfolio</p>
          </div>
          <div>
            <Link href={`https://babbar.vercel.app/`}>
              <img src={'/projects/clientportfolio.webp'} alt='one' width={500} height={500} />
            </Link>
          </div>
        </div>
        <div className='card'>
          <div className='tag'>
            <p>Cryptorush</p>
          </div>
          <div>
            <Link href={`https://cryptorushh.netlify.app/`}>
              <img src={'/projects/cryptorush.webp'} alt='one' width={500} height={500} />
            </Link>
          </div>
        </div>
        <div className='card'>
          <div className='tag'>
            <p>Codingkaro</p>
          </div>
          <div>
            <Link href={`https://codeekaro.netlify.app/`}>
              <img src={'/projects/coding.webp'} alt='one' width={500} height={500} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work