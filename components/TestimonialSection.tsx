import Image from 'next/image'

const TestimonialSection = () => {
  return (
    <section className="relative h-[50vh] w-full text-white text-center flex items-center justify-center px-6">
      {/* Background Image */}
      <Image
        src='/images/featuredproject.png'
        alt="Customer testimonial background"
        fill
        priority
        className="object-cover object-center z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto">
        <p className="text-2xl md:text-3xl font-semibold leading-snug">
          A really nice quote from a{' '}
          <span className="text-yellow-400 font-bold">good</span> customer to show
          <br />
          how <span className="text-yellow-400 font-bold">good</span> you are
        </p>
        <p className="text-sm text-zinc-200 mt-4 italic">That customer&apos;s name</p>
      </div>
    </section>
  )
}

export default TestimonialSection
