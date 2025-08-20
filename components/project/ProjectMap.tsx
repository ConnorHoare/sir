const ProjectMap = ({ mapLink }: { mapLink: string }) => {
  return (
    <section className="px-6 md:px-20 pb-24">
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="w-full h-80">
          <iframe
            src={mapLink}
            className="w-full h-full border shadow-lg"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-sm text-zinc-500 mb-1">Google Maps</p>
          <h3 className="text-xl font-bold text-zinc-900">See Where We Built This</h3>
        </div>
      </div>
    </section>
  )
}

export default ProjectMap
