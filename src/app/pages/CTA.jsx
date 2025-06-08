import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
    <section className='w-[100%] h-screen bg-[var(--color-dark)] py-14 px-8'>
        <div className='w-[100%] min-h-[100%] bg-[var(--color-light)] rounded-lg flex justify-evenly 2xl:justify-center gap-7 2xl:gap-15 flex-col items-center'>
            <p className='subheading text-[1rem] font-semibold w-3/4 text-center '>(Want your brand to outshine?)</p>
            <h1 className='heading text-[2.5rem] 2xl:text-[6rem] 2xl:leading-20 2xl:w-3/5 text-center font-bold leading-10 '>Let&apos;s create something <span className="italic opacity-50">remarkable</span> together.</h1>
            <div>
              <Link href={`mailto:abhinav210702@gmail.com`}>
                <button className='bg-[var(--color-dark)] subheading text-white py-5 px-4 cursor-pointer rounded-lg'>Let's Chat!</button>
              </Link>
            </div>
        </div>
    </section>
  )
}

export default CTA