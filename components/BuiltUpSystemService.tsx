
import Image from 'next/image'
import Link from 'next/link'

const BuiltUpSystemService = () => {
  return (
    <section id='built-up-systems' className="bg-white px-6 py-20 text-black overflow-hidden ">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold uppercase text-transparent stroke-text mb-16">
          Built Up Systems
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Block */}
          <div className="border border-[#cdb87d] px-6 py-5 text-sm text-zinc-800 leading-relaxed relative">
            <p>
              These systems often rely upon the ability of the profile shape to interact with other
              structural components to guarantee a stable construction and in this respect Southern
              Industrial Roofing has many years of experience to pass on to the client seeking
              reassurance.
            </p>
            <br />
            <p>
              For further confidence of our abilities please view any of the images of finished
              projects below which further demonstrate our prowess in this area.
            </p>
          </div>

          {/* Image Stack */}
          <div className="relative flex items-center justify-center h-[320px] w-full overflow-hidden">
            {/* Left Image */}
            <div className="absolute -rotate-[6deg] -translate-x-[90%] z-10 shadow-lg w-[65%] md:w-[260px]">
              <Image
                src="/images/hero.png"
                alt="Built Up 1"
                width={300}
                height={300}
                className="object-cover w-full h-auto"
              />
            </div>

            {/* Center Left */}
            <div className="absolute -rotate-[2deg] -translate-x-[30%] z-20 shadow-lg w-[65%] md:w-[260px]">
              <Image
                src="/images/portfoliohero.png"
                alt="Built Up 2"
                width={300}
                height={300}
                className="object-cover w-full h-auto"
              />
            </div>

            {/* Center Right */}
            <div className="absolute rotate-[4deg] translate-x-[20%] z-20 shadow-lg w-[65%] md:w-[260px]">
              <Image
                src="/images/hero.png"
                alt="Built Up 3"
                width={260}
                height={260}
                className="object-cover w-full h-auto"
              />
            </div>

            {/* Right Image */}
            <div className="absolute rotate-[8deg] translate-x-[90%] z-10 shadow-lg w-[65%] md:w-[260px]">
              <Image
                src="/images/featuredproject.png"
                alt="Built Up 4"
                width={260}
                height={260}
                className="object-cover w-full h-auto"
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

export default BuiltUpSystemService
