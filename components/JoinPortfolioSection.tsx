import Image from 'next/image'
import Link from 'next/link'

const JoinPortfolioSection = () => {
    return (
        <section className="relative h-[90vh] w-full text-white">
            {/* Background Image */}
            <Image
                src='/images/portfoliohero.png'
                alt="Metal roof background"
                fill
                priority
                className="object-cover object-center z-0"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10" />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 max-w-4xl mx-auto">
                {/* Logo */}
                <div className="mb-6">
                    <Image src='/images/logo.svg' alt="SIR Logo" width={100} height={100} className="mx-auto" />
                </div>

                {/* Headline */}
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Become Part Of Our <br /> Growing Portfolio
                </h2>

                {/* Paragraph */}
                <p className="text-base md:text-lg text-zinc-200 mb-10 max-w-2xl">
                    In the ever-changing construction industry, we’re proud to offer competitive pricing
                    along with an extensive knowledge base to help improve roofing projects. We strive to
                    foster a work environment where relationships are valued and every project is treated
                    with trust and respect. We serve southern parts of the United Kingdom as a general
                    contractor for commercial construction projects.
                </p>

                {/* CTA Link */}
                <Link
                    href="/about"
                    className="text-sm font-semibold text-yellow-400 hover:text-yellow-300 transition inline-flex items-center gap-1 group"
                >
                    <span className="block">LEARN MORE ABOUT WORKING WITH US</span>
                    <span className="block text-yellow-400 text-2xl translate-y-[-2px] group-hover:translate-x-1 transition-transform">
                        &raquo;
                    </span>
                </Link>

            </div>
        </section>
    )
}

export default JoinPortfolioSection
