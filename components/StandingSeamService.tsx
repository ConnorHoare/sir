import Image from 'next/image'
import Link from 'next/link'

const StandingSeamService = () => {
  return (
    <section className="bg-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold uppercase text-transparent stroke-text mb-12">
          Standing Seam Systems
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text Box */}
          <div>
            <div className="border-l-2 border-[#cdb87d] pl-4 mb-4">
              <p className="text-sm md:text-base text-zinc-800 leading-relaxed">
                Standing seam systems are practical and robust and offer a modern ergonomic
                curved or straight finish to any roof. This system can combine aesthetics
                with a proven track record for performance and innovation and as such
                justifies its position as one of the most advanced and versatile roofing
                systems on the market today.
                <br /><br />
                Southern Industrial Roofing has impressive credentials for handling this type
                of product and can demonstrate this experience by showing you various
                finished projects below.
                <br /><br />
                You can see examples of the variety and range of standing seam systems that
                we have constructed.
              </p>
            </div>
          </div>

          {/* Image Layout */}
          <div className="relative h-[350px]">
            <div className="absolute top-0 left-8 rotate-[-8deg] shadow-lg">
              <Image
                src="/images/hero.png"
                alt="Standing seam example 1"
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
            <div className="absolute top-12 left-32 rotate-[5deg] shadow-lg">
              <Image
                src="/images/featuredproject.png"
                alt="Standing seam example 2"
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
            <div className="absolute top-32 left-16 rotate-[10deg] shadow-lg">
              <Image
                src="/images/portfoliohero.png"
                alt="Standing seam example 3"
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
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

export default StandingSeamService
