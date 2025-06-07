"use client"
import React, { useRef } from 'react'
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Copy({children, animateOnScroll = true, delay = 0}) {
    const containerRef = useRef(null);
    const elementRef = useRef([]);
    const splitRef = useRef([]);
    const line = useRef([]);

    useGSAP(() => {
        if(!containerRef.current) return ;

        splitRef.current = [];
        elementRef.current = [];
        line.current = [];

        let elements = [];

        if(containerRef.current.hasAttribute("data-copy-wrapper")) {
            elements = Array.from(containerRef.current.children);
        }else {
            elements = [containerRef.current]
        }

        elements.forEach((element) => {
            elementRef.current.push(element);
            let split = SplitText.create(element, {
                type:"words, lines", 
                mask:"lines", 
                linesClass: "line++",
                autoSplit:true
            })
            
            splitRef.current.push(split);

            const computedStyle = window.getComputedStyle(element);
            const textIndent = computedStyle.textIndent;
            if(textIndent && textIndent !== '0px') {
                if(split.lines.length > 0) {
                    split.lines[0].style.paddingLeft = textIndent;
                }
                element.style.textIndent = "0";
            }
            line.current.push(...split.lines)
        
        });

        gsap.set(line.current, {y:"100%"});

        const animationProps = {
            y:"0%", 
            stagger:0.1, 
            ease:"power4.out", 
            delay:delay,
        };

        if(animateOnScroll) {
            gsap.to(line.current, {
                ...animationProps, scrollTrigger: {
                    trigger:containerRef.current, 
                    start:"top 75%",
                    once:true, 
                }
            })
        }else {
            gsap.to(line.current, animationProps)
        }

        return () => {
            splitRef.current.forEach((split) => {
                if(split) {
                    split.revert();
                }
            })
        }

    }, {scope:containerRef, dependencies:[animateOnScroll, delay]})

    if(React.Children.count(children) === 1) {
        return React.cloneElement(children, {ref: containerRef});
    }

    return (
        <div ref={containerRef} data-copy-wrapper="true">
            {children}
        </div>
    )
}