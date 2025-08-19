import Link from 'next/link'
import { FaTools, FaMoneyBillWave, FaClock, FaHardHat, FaHandshake } from 'react-icons/fa'

const cards = [
  {
    title: 'HIGH QUALITY',
    description:
      'We’ve worked hard to earn and maintain our reputation for quality work, and we’ve employed enough trustworthy, well-trained client site teams. With our mix of skilled and experienced personnel, plus our prequalified trade partners and suppliers, each project is held to the highest standards.',
    icon: <FaTools className="text-2xl text-green-700" />,
  },
  {
    title: 'ON BUDGET',
    description:
      'Our unrivalled roofing services, combined with our years of experience as a UK-based roofing contractor, enable us to price projects with a budget that is accurate, comprehensive, and complete. We remain committed to staying on budget throughout the design and construction process.',
    icon: <FaMoneyBillWave className="text-2xl text-green-700" />,
  },
  {
    title: 'ON SCHEDULE',
    description:
      'Completing projects on or ahead of schedule is our standard. One that we aim to maintain every step, from early site and client clarity through coordination and control. With regular updates and look-ahead schedules, we make sure each project stays on track as a general contractor in the UK.',
    icon: <FaClock className="text-2xl text-green-700" />,
  },
  {
    title: 'COMMITTED TO SAFETY',
    description:
      'Safety is a priority for us, because it’s good for business and it’s the right thing to do. All employees and trade partners are on a proactive safety path. Safety remains a priority throughout a project with regular meetings and documented inspections.',
    icon: <FaHardHat className="text-2xl text-green-700" />,
  },
  {
    title: 'RELATIONSHIP FOCUSED',
    description:
      'Relationships are the cornerstone of our business. The quality of our work, turnover, and high % of satisfied customers are all a reflection of how we value and respect our employees, trade partners, design consultants, and clients.',
    icon: <FaHandshake className="text-2xl text-green-700" />,
  },
]

const SouthernPhilosophySection = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-black">
          The Southern Philosophy
        </h2>
        <p className="text-sm md:text-base text-zinc-700 max-w-2xl mx-auto mb-6">
          As a roofing partner, we believe that a knowledgeable, healthy, and engaged team will
          deliver a superior product and service for our clients who put their trust in us.
        </p>

        {/* CTA */}
        <Link
          href="/about"
          className="text-sm font-semibold text-green-600 hover:text-green-500 transition inline-flex items-center gap-1 mb-12"
        >
          LEARN MORE ABOUT WORKING WITH US
          <span className="text-lg translate-y-[-1px]">&raquo;</span>
        </Link>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className='border px-6 py-8 text-left hover:shadow-md transition rounded-sm 
                  border-zinc-300'
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-sm font-bold uppercase text-black mb-2">{card.title}</h3>
              <p className="text-sm text-zinc-700 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SouthernPhilosophySection
