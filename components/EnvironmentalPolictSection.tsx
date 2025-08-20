
import Image from 'next/image'

const EnvironmentalPolicySection = () => {
    return (
        <section className="bg-white px-6 md:px-12 xl:px-24 py-8 ">
            <div className='max-w-7xl mx-auto'>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold stroke-text text-transparent leading-tight">
                        Environmental
                    </h2>

                </div>

                {/* Top Row: Image + Text */}
                <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
                    <div className="relative w-full h-64 md:h-full">
                        <Image
                            src="/images/hero.png"
                            alt="Environmental Project"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="text-sm text-zinc-700 leading-relaxed">
                        <div className='flex items-center md:gap-4 gap-2 pb-2'>
                            <p className="text-sm font-semibold tracking-wide text-zinc-800">
                                Environmental Policy
                            </p>
                            <div className="border-t border-zinc-800 flex-1 h-px" />
                        </div>

                        <p className="mb-4">
                            As with all other aspects of compliancy Southern Industrial Roofing fully commit to minimising the impact on the environment that any construction site may create.
                        </p>
                        <p>
                            Having worked with the most forward of thinking clients in this environmentally sensitive era we not only share the belief that we must take our responsibilities in this area very seriously but we can demonstrate how we have done so on recent contracts.
                        </p>
                    </div>
                </div>

                {/* Bottom Full-width Image */}
                <div className="relative w-full h-48 md:h-72">
                    <Image
                        src="/images/portfoliohero.png"
                        alt="Environmental Example"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            {/* Title Row */}

        </section>
    )
}

export default EnvironmentalPolicySection
