'use client'

import ProjectCard from './ProjectCard'
import { projects } from '@/data/projects'
import Link from 'next/link'

const FeaturedProjects = () => {
  return (
    <section className="block bg-zinc-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-400 tracking-tight mb-10">
          Featured Projects
        </h2>

        {/* Scrollable container */}
        <div className="flex gap-8 overflow-x-auto custom-scrollbar scroll-smooth pb-4">
          {projects.slice(0, 5).map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              location={project.location}
              system={project.system}
              image={project.image}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="pt-8 text-center">
          <Link
            href="/projects"
            className="text-green-500 text-sm font-semibold hover:underline inline-flex items-center gap-1"
          >
            View All <span className="text-lg">&raquo;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
