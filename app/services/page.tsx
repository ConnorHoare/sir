import BuiltUpSystemService from '@/components/BuiltUpSystemService'
import RainscreenCladdingService from '@/components/RainscreenCladdingService'
import ServicesGrid from '@/components/ServicesGrid'
import ServicesHero from '@/components/ServicesHero'
import StandingSeamService from '@/components/StandingSeamService'
import TestimonialSection from '@/components/TestimonialSection'
import React from 'react'

const page = () => {
    return (
        <div>
            <main>
                <ServicesHero />
                <ServicesGrid />
                <TestimonialSection />
                <StandingSeamService />
                <RainscreenCladdingService />
                <BuiltUpSystemService />
            </main>
        </div>
    )
}

export default page