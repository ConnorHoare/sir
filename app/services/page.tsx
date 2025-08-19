import ServicesGrid from '@/components/ServicesGrid'
import ServicesHero from '@/components/ServicesHero'
import TestimonialSection from '@/components/TestimonialSection'
import React from 'react'

const page = () => {
    return (
        <div>
            <main>
                <ServicesHero />
                <ServicesGrid />
                <TestimonialSection />
            </main>
        </div>
    )
}

export default page