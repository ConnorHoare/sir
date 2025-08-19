import { services } from '@/data/services'
import ServiceCard from './ServiceCard'

const ServicesGrid = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-0 md:px-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            image={service.image}
            slug={service.slug}
          />
        ))}
      </div>
    </section>
  )
}

export default ServicesGrid
