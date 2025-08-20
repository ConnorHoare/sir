import Image from "next/image"

interface Props {
  title: string
  image: string
}

const ProjectHero = ({ title, image }: Props) => {
  return (
    <section className="relative h-[60vh] w-full flex items-end justify-start bg-black text-white">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover object-center opacity-70"
        priority
      />
      <div className="relative z-10 p-8 md:p-16">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {title}
        </h1>
        <div className="mt-4 w-8 h-8">
          <Image
            src="/icons/chevron-double-down.svg"
            alt="Chevron"
            width={32}
            height={32}
          />
        </div>
      </div>
    </section>
  )
}

export default ProjectHero
