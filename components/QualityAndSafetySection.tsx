
import Image from 'next/image'
import Link from 'next/link'

const QualityAndSafetySection = () => {
    return (
        <section className="px-6 md:px-12 pt-30 md:pt-40 bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
                {/* Left - Hero Image */}
                <div className="relative w-full h-[300px] md:h-full min-h-[500px]">
                    <Image
                        src="/images/hero.png"
                        alt="Contact Background"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>


                {/* Right - Content */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-3xl md:text-4xl font-bold stroke-text text-transparent">
                        Quality and Safety
                    </h2>

                    <p className="text-sm text-zinc-700 leading-relaxed">
                        We are committed to working by our client’s standards thus ensuring an established
                        format for the project and further engendering trust and confidence in procedures.
                    </p>

                    <p className="text-sm text-zinc-700 leading-relaxed">
                        We have been fully committed to all Health and Safety aspects of any contract since the
                        very inception of our company.
                    </p>

                    <p className="text-sm text-zinc-700 leading-relaxed">
                        We value the health and security of our employees and all personnel that may visit a
                        working site over and above any other requirement that a project may demand.
                    </p>

                    {/* Optional Links */}
                    <div className="flex gap-6 mt-2">
                        <Link
                            href="/documents/quality-policy.pdf"
                            className="text-sm font-semibold text-black hover:underline underline-offset-4"
                            target="_blank"
                        >
                            Quality Policy
                        </Link>
                        <Link
                            href="/documents/safety-policy.pdf"
                            className="text-sm font-semibold text-black hover:underline underline-offset-4"
                            target="_blank"
                        >
                            Safety Policy
                        </Link>
                    </div>

                    {/* Mini Image Row */}
                    <div className="grid grid-cols-3 gap-4 mt-10">
                        <div className="relative aspect-[4/5]">
                            <Image
                                src="/images/hero.png"
                                alt="Quality image 1"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative aspect-[4/5]">
                            <Image
                                src="/images/hero.png"
                                alt="Quality image 2"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative aspect-[4/5]">
                            <Image
                                src="/images/hero.png"
                                alt="Quality image 3"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QualityAndSafetySection
