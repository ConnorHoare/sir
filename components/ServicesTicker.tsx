
const services = [
  'SCREEN CLADDING',
  'STANDING SEAM SYSTEMS',
  'COMPOSITE CLADDING',
  'SINGLE PLY ROOFING',
  'RAINSCREEN SYSTEMS',
]

const ServicesTicker = () => {
  return (
    <section className="bg-white overflow-hidden py-8">
      <div className="relative whitespace-nowrap">
        <div className="animate-marquee flex space-x-12 will-change-transform">
          {[...services, ...services].map((service, index) => (
            <span
              key={index}
              className="text-4xl font-extrabold uppercase text-transparent stroke-text"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesTicker
