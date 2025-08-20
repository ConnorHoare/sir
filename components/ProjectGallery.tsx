'use client'

import { useState } from 'react'
import Image from 'next/image'
import { projects } from '@/data/projects'

const categories = ['All', ...new Set(projects.map((p) => p.category))]

const ProjectGallery = () => {
  const [filter, setFilter] = useState('All')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [visibleCount, setVisibleCount] = useState(8)

  const filtered = projects
    .filter((project) =>
      filter === 'All' ? true : project.category === filter
    )
    .sort((a, b) =>
      sortOrder === 'desc'
        ? new Date(b.date).getTime() - new Date(a.date).getTime()
        : new Date(a.date).getTime() - new Date(b.date).getTime()
    )
    .slice(0, visibleCount)

  return (
    <section className="bg-white px-6 md:px-12 xl:px-24 py-16">
      {/* Filters */}
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <div>
          <label className="mr-2 font-medium">Filter by category:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-zinc-300 px-3 py-2 text-sm"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mr-2 font-medium">Sort by date:</label>
          <select
            value={sortOrder}
            onChange={(e) =>
              setSortOrder(e.target.value as 'asc' | 'desc')
            }
            className="border border-zinc-300 px-3 py-2 text-sm"
          >
            <option value="desc">Newest First</option>
            <option value="asc">Oldest First</option>
          </select>
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((project) => (
          <div key={project.id} className="relative w-full h-40 md:h-56 group overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < projects.length && (
        <div className="text-center mt-8">
          <button
            onClick={() => setVisibleCount((prev) => prev + 8)}
            className="text-sm font-semibold text-yellow-600 hover:text-yellow-500 transition group inline-flex items-center"
          >
            Load More
            <span className="ml-2 group-hover:translate-x-1 transition-transform text-lg">
              &raquo;
            </span>
          </button>
        </div>
      )}
    </section>
  )
}

export default ProjectGallery
