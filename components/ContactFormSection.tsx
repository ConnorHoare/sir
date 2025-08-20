import Image from 'next/image'

const ContactFormSection = () => {
  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Left Image */}
      <div className="relative w-full md:w-1/2 h-[300px] md:h-auto">
        <Image
          src="/images/hero.png"
          alt="Contact Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 px-6 md:px-16 py-10 my-auto bg-white">
        <h2 className="text-3xl md:text-4xl font-bold stroke-text text-transparent mb-2">
          Contact Us
        </h2>
        <p className="text-md text-zinc-700 mb-10">How we can help you?</p>

        <form className="space-y-6 w-full max-w-xl">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-zinc-800 mb-1">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              required
              className="w-full border border-zinc-300 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-green-600 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-800 mb-1">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full border border-zinc-300 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-green-600 transition"
            />
          </div>

          {/* Number */}
          <div>
            <label htmlFor="number" className="block text-sm font-medium text-zinc-800 mb-1">
              Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="number"
              required
              className="w-full border border-zinc-300 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-green-600 transition"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-800 mb-1">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              required
              className="w-full border border-zinc-300 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-green-600 transition resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="relative bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 uppercase text-sm tracking-wider"
          >
            SEND
            <span className="absolute -bottom-1 left-1 w-full h-[2px] bg-yellow-500 z-[-1]" />
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactFormSection
