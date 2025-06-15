"use client";
import { ReactLenis } from "lenis/react"
import Hero from "./pages/Hero";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Services from "./pages/Services";
import Work from "./pages/Work";
import About from "./pages/About";
import CTA from "./pages/CTA";
import Footer from "./pages/Footer";

gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  const mainRef = useRef(null);
  const heroRef = useRef(null);
  const serviceRef = useRef(null);

  useEffect(() => {
    gsap.to(heroRef.current, {
      rotate:-5,
      scale:0.5,
      scrollTrigger: {
        trigger:mainRef.current,
        start:"top top",
        end:"bottom bottom",
        scrub:true
      }
    });

    gsap.to(serviceRef.current, {
      rotate:0,
      scale:1,
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
        <div>
          <Services ref={serviceRef} />
          <Work />
          <About />
          <CTA />
        </div>
        <Footer />
      </main> 
      
        
        
  </ReactLenis>;
}
