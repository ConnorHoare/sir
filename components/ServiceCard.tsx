
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

type Props = {
  title: string
  image: string
  slug: string
}

const ServiceCard = ({ title, image, slug }: Props) => {
  return (
    <div className="relative group border hover:border-green-500 transition overflow-hidden">
      {/* Image */}
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-auto object-cover"
      />

      {/* Title Banner */}
      <div className="absolute top-0 left-0 bg-[#cdb87d] text-black text-xs font-bold px-3 py-2 uppercase tracking-wide">
        {title}
      </div>

      {/* Arrow Button */}
      <Link
        href={`#${slug}`}
        className="absolute bottom-0 right-0 bg-black px-3 py-2 group-hover:bg-green-700 transition"
        aria-label={`View more about ${title}`}
      >
        <FaArrowRight className="text-green-400 text-sm" />
      </Link>
    </div>
  )
}

export default ServiceCard
