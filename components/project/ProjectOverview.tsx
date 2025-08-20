interface Props {
  location: string
  description: string
}

const ProjectOverview = ({ location, description }: Props) => {
  return (
    <section className="px-6 py-12 md:px-20 grid md:grid-cols-2 gap-8 items-start">
      <div className="border-l-2 border-yellow-500 pl-4">
        <p className="text-sm font-semibold mb-2">Location: <span className="font-normal">{location}</span></p>
        <p className="text-sm text-zinc-800">{description}</p>
      </div>
    </section>
  )
}

export default ProjectOverview
