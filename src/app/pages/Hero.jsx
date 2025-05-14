import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
const Hero = React.forwardRef((_props, ref) => {
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  useEffect(() => {
    gsap.to(imageRef.current, {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        scale: 1,
        duration: 2.5,
        ease: 'power3.out',
      });
    

    const headingElement = headingRef.current;
    let position = 1;
    const scrollSpeed = 1; 

    function animateHeading() {
      position -= scrollSpeed;
      headingElement.style.transform = `translateX(${position}px)`;

      if (Math.abs(position) > headingElement.scrollWidth / 3) {
        position = 2;
      }
      requestAnimationFrame(animateHeading);
    }
    animateHeading();

    gsap.to(headingRef.current, {
      opacity:1, 
      duration:2.5,
      ease:'power3.out'
    })

    const imageElement = imageRef.current;
    imageElement.addEventListener('mouseenter', () => {
      gsap.to(imageElement, { scale: 1.15, duration: 1.5, ease: 'power3.out', filter: 'grayscale(1)'});
    });

    imageElement.addEventListener('mouseleave', () => {
      gsap.to(imageElement, { scale: 1, duration: 1.5, ease: 'power3.out',filter: 'grayscale(0)' });
    });

    return () => {
        imageElement.removeEventListener('mouseenter', () => {});
        imageElement.removeEventListener('mouseleave', () => {});
    }

  }, [])
  

  return (
      
        <div ref={ref} className='overflow-x-hidden sticky top-0 w-full bg-[var(--color-light)] h-svh flex justify-center items-center'>
            <div className='md:w-[420px] w-[300px] overflow-hidden rounded-sm'>
                <Image ref={imageRef} src={'/developer/abhishek.webp'} alt='developer-hero-image' layout='responsive'  width={500} height={500} style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)', scale: '1.1' }}/>
            </div>
            <div className='absolute -z-1 whitespace-nowrap'>
                <h1 ref={headingRef} className='opacity-0 heading md:text-[50vw] text-[75vw] text-red-600'>
                  Abhishek<sup>&copy;</sup> Abhishek<sup>&copy;</sup> Abhishek<sup>&copy;</sup> Abhishek<sup>&copy;</sup> Abhishek<sup>&copy;</sup> Abhishek<sup>&copy;</sup> Abhishek<sup>&copy;</sup> Abhishek<sup>&copy;</sup> Abhishek<sup>&copy;</sup> Abhishek<sup>&copy;</sup>
                </h1>
            </div>
        </div>
        
  )
});

export default Hero