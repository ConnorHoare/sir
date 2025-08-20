const ProjectDetails = ({ details }: { details: string }) => {
  return (
    <section className="px-6 md:px-20 pb-16">
      <div className="border-l-2 border-yellow-500 pl-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-black">
          <span className="text-yellow-500">Project</span> Details
        </h2>
        <p className="text-sm text-zinc-700 max-w-3xl">{details}</p>
      </div>
    </section>
  )
}

export default ProjectDetails
