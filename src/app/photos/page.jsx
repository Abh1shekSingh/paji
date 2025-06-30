"use client"
import React, { useState } from 'react';

const Page = () => {
  // State to hold the currently displayed image source and its index
  const [currentImage, setCurrentImage] = useState('/photographs/1.webp');
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Initialize with the index of the default image

  const images = [
    '/photographs/1.webp',
    '/photographs/2.webp',
    '/photographs/3.webp',
    '/photographs/4.webp',
    '/photographs/5.webp',
    '/photographs/6.webp',
    '/photographs/7.webp',
    '/photographs/8.webp',
  ];

  // Function to handle image clicks in the minimap
  const handleImageClick = (imageSrc, index) => {
    setCurrentImage(imageSrc);
    setCurrentImageIndex(index);
  };

  // Calculate the top position for the indicator in desktop view (vertical)
  const indicatorTop = currentImageIndex * 60; // 60px is the height of each minimap item

  // Calculate the left position for the indicator in mobile view (horizontal)
  const indicatorLeft = currentImageIndex * 60; // 60px is the width of each minimap item in mobile

  return (
    <section className='container relative w-[100vw] h-[100vh] overflow-hidden bg-white'>
      <nav className='fixed top-0 left-0 w-[100vw] p-[1.5em] flex items-center justify-between'>
        <p>Paji Shots</p>
      </nav>
      <div className='site-info absolute top-[50%] left-[1.5em] flex gap-4'>
        <p>Paji-shots</p>
        <p><span className='opacity-70'>Responsive Minimap</span></p>
      </div>

      <div className='img-preview absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.6] aspect-3/4 overflow-hidden'>
        {/* Use the currentImage state here */}
        <img src={currentImage} alt='' className='w-[100%] h-[100%] object-contain absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 object-contain' />
      </div>

      <div className='minimap absolute top-[8em] right-[8em] w-[80px]'>
        {/* Apply the calculated style to the indicator based on view */}
        <div
          className='indicator absolute border-2 border-blue-500 transition-all duration-300 ease-in-out'
          style={{
            // Desktop styles (vertical alignment)
            top: `${indicatorTop}px`,
            left: 0, // Ensure left is 0 for desktop
            height: '60px',
            width: '100%',
            // Mobile styles (horizontal alignment) - these will override desktop styles on smaller screens
            '@media (max-width: 900px)': {
              top: 0, // Ensure top is 0 for mobile
              left: `${indicatorLeft}px`,
              width: '60px',
              height: '100%',
            },
          }}
        ></div>
        <div className='items relative w-[100%] h-[100%] flex flex-col gap-0'>
          {images.map((imageSrc, index) => (
            <div
              key={index}
              className='w-[100%] h-[60px] p-[5px] cursor-pointer item'
              onClick={() => handleImageClick(imageSrc, index)} // Pass the index here
            >
              <img src={imageSrc} alt='' className='w-[100%] h-[100%] object-cover' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;