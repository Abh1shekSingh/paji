"use client";
import { ReactLenis } from "lenis/react"
import Hero from "./pages/Hero";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import About from "./pages/About";
import Work from "./pages/Work";

gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  const mainRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    gsap.to(heroRef.current, {
      ...(isMobile?{}:{scale:0.8}),
      ...(isMobile?{}: {rotate:-5}),
      scrollTrigger: {
        trigger:mainRef.current,
        start:"top top",
        end:"bottom bottom",
        scrub:true
      }
    });

    gsap.to(aboutRef.current, {
      ...(isMobile?{}:{scale:1}), 
      ...(isMobile?{}:{ rotate:0}),
      scrollTrigger: {
        trigger:mainRef.current,
        start:"top top", 
        end:"bottom bottom",
        scrub:true
      }
    });

  },[])
  return <ReactLenis root>
      <main ref={mainRef} className="w-full h-[200vh]">
        <Hero ref={heroRef} />
        <About ref={aboutRef} />
        <div>
          <Work />
        </div>
      </main> 
      
        
        
  </ReactLenis>;
}
