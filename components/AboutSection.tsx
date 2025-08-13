
import Link from 'next/link'

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:py-20 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:border-l-4 md:pl-8 md:border-yellow-500">
        <h2 className="text-2xl md:text-3xl font-bold text-black leading-snug mb-4 md:mb-6">
          <span className="block md:hidden border-r-4 border-yellow-400 pr-2">
            Guaranteeing High Standard,
            <br />
            Long Lasting Solutions
          </span>
          <span className="hidden md:block">
            Southern Industrial Roofing:
            <br />
            Guaranteeing High Standard,
            <br />
            Long Lasting Solutions
          </span>
        </h2>

        <p className="text-base text-zinc-800 leading-relaxed mb-6">
          For more than 40 years, Snyder Construction Group has been a leader within the
          commercial construction industry in the Midwest. Our team has the resources,
          experience, and expertise to successfully take projects from inception to
          completion, delivering on time and under budget, and exceeding client
          expectations each step of the way. Our company serves as a general contractor for
          commercial properties in and around Springfield, Missouri, and throughout the
          Midwest.
        </p>

        <Link
          href="/about"
          className="text-sm font-semibold text-black hover:text-yellow-600 transition group inline-flex items-center"
        >
          Learn More About Our Team
          <span className="ml-2 text-yellow-500 group-hover:translate-x-1 transition-transform">
            &raquo;
          </span>
        </Link>
      </div>
    </section>
  )
}

export default AboutSection
