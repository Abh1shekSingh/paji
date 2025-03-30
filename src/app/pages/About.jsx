import React from 'react'

const About = React.forwardRef((_props, ref) => {
  return (
    <div ref={ref} className='h-screen bg-[var(--color-dark)] rotate-5 scale-[0.5]'>About</div>
  )
});

export default About