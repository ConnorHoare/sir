import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

type Props = {
  title: string
  location: string
  system: string
  image: string
}

const ProjectCard = ({ title, location, system, image }: Props) => {
  return (
    <div className="w-[400px] shrink-0">
      <div className="relative w-full overflow-hidden mb-4 group">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="object-cover w-full h-full transition-transform group-hover:scale-105"
        />
        <div className="absolute bottom-0 right-0 bg-black px-3 py-2">
          <FaArrowRight className="text-green-500 text-sm" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-zinc-400">{location} | {system}</p>
    </div>
  )
}

export default ProjectCard
