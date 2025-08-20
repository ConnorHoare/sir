'use client'

import Image from 'next/image'
import Link from 'next/link'

const RainscreenCladdingService = () => {
  return (
    <section id='rainscreen-cladding' className="bg-zinc-900 px-6 py-20 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold uppercase text-transparent white-stroke-text mb-16">
          Rainscreen Cladding
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Stack */}
          <div className="relative flex items-center justify-center h-[320px] w-full overflow-hidden">
            {/* Left Image */}
            <div className="absolute -rotate-[8deg] -translate-x-1/2 z-10 shadow-lg w-[65%] md:w-[300px]">
              <Image
                src="/images/hero.png"
                alt="Rainscreen 1"
                width={300}
                height={300}
                className="object-cover w-full h-auto"
              />
            </div>

            {/* Center Image */}
            <div className="relative z-20 rotate-[0deg] shadow-xl w-[65%] md:w-[300px]">
              <Image
                src="/images/portfoliohero.png"
                alt="Rainscreen 2"
                width={300}
                height={300}
                className="object-cover w-full h-auto"
              />
            </div>

            {/* Right Image */}
            <div className="absolute rotate-[8deg] translate-x-1/2 z-10 shadow-lg w-[65%] md:w-[300px]">
              <Image
                src="/images/hero.png"
                alt="Rainscreen 3"
                width={300}
                height={300}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Text Box */}
          <div className="border border-[#cdb87d] px-6 py-5 text-sm text-zinc-100 leading-relaxed relative">
            <p>
              Rainscreen Cladding is a unique method of cladding or over-cladding a building to
              provide weather protection with ventilation and drainage for the building fabric and
              structure.
            </p>
            <br />
            <p>
              Renowned for their ability to create a completely ‘flat’ surface, rainscreen cladding
              systems are increasingly used on prestigious newbuild projects where guaranteed
              long-term performance and the aesthetics of the building façade are of paramount
              importance.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-20 flex justify-center">
          <Link
            href="/contact"
            className="relative inline-block px-8 py-3 bg-green-600 text-white font-semibold text-sm uppercase tracking-wide hover:bg-green-700 transition"
          >
            GET IN TOUCH
            <span className="absolute -bottom-1 left-1 w-full h-[2px] bg-yellow-500 z-[-1]" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default RainscreenCladdingService
