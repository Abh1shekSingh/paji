import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WorkMobile = () => {
  return (
    <section className='w-full min-h-screen bg-white z-2 relative px-8 py-14'>
      <h1 className='heading uppercase text-[3rem] font-bold leading-15 mb-7'>Selected <span className='opacity-70 italic'>Work</span></h1>
      <div className='relative overflow-hidden rounded-lg  relative w-[100%] h-[100%]'>
        
        <div className='mb-7 relative'>
          <div className='absolute z-1 text-xs top-[1em] left-[1em] bg-black text-white rounded-md p-[0.5em]'>
            <p>Craftzblog</p>
          </div>
          <div>
            <Link href={`https://craftzblog.vercel.app/`}>
              <Image src={`/projects/blogapp.webp`} width={500} height={500} alt='projects-images'/>
            </Link>
          </div>
        </div>

        <div className='mb-7 relative'>
          <div className='absolute z-1 text-xs top-[1em] left-[1em] bg-black text-white rounded-md p-[0.5em]'>
            <p>Portfolio</p>
          </div>
          <div>
            <Link href={`https://babbar.vercel.app/`}>
              <Image src={`/projects/clientportfolio.webp`} width={500} height={500} alt='projects-images'/>
            </Link>
          </div>
        </div>

        <div className='mb-7 relative'>
          <div className='absolute z-1 text-xs top-[1em] left-[1em] bg-black text-white rounded-md p-[0.5em]'>
            <p>Codekaro</p>
          </div>
          <div>
            <Link href={`https://codeekaro.netlify.app/`}>
              <Image src={`/projects/coding.webp`} width={500} height={500} alt='projects-images'/>
            </Link>
          </div>
        </div>

        <div className='relative'>
          <div className='absolute z-1 text-xs top-[1em] left-[1em] bg-black text-white rounded-md p-[0.5em]'>
            <p>Cryptorush</p>
          </div>
          <div>
            <Link href={`https://cryptorushh.netlify.app/`}>
              <Image src={`/projects/cryptorush.webp`} width={500} height={500} alt='projects-images'/>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkMobile