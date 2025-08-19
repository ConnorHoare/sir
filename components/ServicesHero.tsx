import Image from 'next/image'
import { FaChevronDown } from 'react-icons/fa'

const ServicesHero = () => {
  return (
    <section className="relative h-[50vh] w-full text-white">
      {/* Background Image */}
      <Image
        src='/images/featuredproject.png'
        alt="Services background"
        fill
        priority
        className="object-cover object-center z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      {/* Heading */}
      <div className="relative z-20 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold">Services</h1>

        {/* Chevron Down */}
        <div className="mt-6">
          <FaChevronDown className="text-yellow-400 text-2xl" />
        </div>
      </div>
    </section>
  )
}

export default ServicesHero
