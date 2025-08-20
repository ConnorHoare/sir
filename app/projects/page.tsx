import FeaturedProjects from '@/components/FeaturedProjects'
import ProjectGallery from '@/components/ProjectGallery'
import ProjectsHero from '@/components/ProjectsHero'
import TestimonialSection from '@/components/TestimonialSection'
import React from 'react'

const page = () => {
  return (
    <div>
        <main>
            <ProjectsHero />
            <ProjectGallery />
            <TestimonialSection />
            <FeaturedProjects />
        </main>
    </div>
  )
}

export default page