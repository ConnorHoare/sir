import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return ( 
    <section className="relative h-screen w-full text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src='/images/hero.png'
        alt="Industrial Building"
        fill
        priority
        className="object-cover object-center z-0"
      />
      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center h-full px-6 md:px-20 pt-24 md:pt-0 text-left">
        {/* "Since 1982" and Divider */}
        <div className="mb-2 md:mb-4">
          <p className="text-sm tracking-wide font-light">Since 1982</p>
          <div className="w-20 h-[2px] bg-yellow-500 mt-1" />
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-6xl font-extrabold leading-snug md:leading-tight max-w-xl md:max-w-2xl">
          Specialist Contractors for <br />
          Industrial Roofing <br />
          and Cladding
        </h1>

        {/* Buttons */}
        <div className="mt-8 md:mt-10 flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-xs md:max-w-none">
          <Link
            href="/projects"
            className="bg-black bg-opacity-80 text-white text-sm font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-opacity-100 transition md:text-base md:px-8"
          >
            SEE OUR WORK <span className="text-yellow-400 text-lg">➤</span>
          </Link>

          <Link
            href="/contact"
            className="bg-green-600 text-white text-sm font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-green-700 transition md:text-base md:px-8"
          >
            GET IN TOUCH <span className="text-white text-lg">➤</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
