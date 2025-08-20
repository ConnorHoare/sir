'use client'

import Image from 'next/image'

const TrainingEducationSection = () => {
    return (
        <section className="bg-white px-6 md:px-12 xl:px-24 pb-16">
            <div className='max-w-7xl mx-auto'>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Image Layout */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1 flex flex-col gap-4">
                            <div className="relative w-full h-40 md:h-52">
                                <Image
                                    src="/images/hero.png"
                                    alt="Training image 1"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative w-full h-40 md:h-52">
                                <Image
                                    src="/images/featuredproject.png"
                                    alt="Training image 2"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="relative w-full h-full min-h-[330px] md:min-h-[440px]">
                                <Image
                                    src="/images/portfoliohero.png"
                                    alt="Training image 3"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold stroke-text text-transparent leading-tight mb-6">
                            Training &amp; <br /> Education
                        </h2>
                        <div className="space-y-4 text-sm text-zinc-700 leading-relaxed">
                            <p>
                                Our devotion to our industry is shown through the quality of workmanship our operatives deliver to our clients.
                            </p>
                            <p>
                                This workmanship is achieved in part through the continual training of our staff throughout their careers with Southern Industrial Roofing.
                            </p>
                            <p>
                                We have an impressively loyal work force who we would like to think appreciate our efforts in providing them with the very highest levels of industry education.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrainingEducationSection
