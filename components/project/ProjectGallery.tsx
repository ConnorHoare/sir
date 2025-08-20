import Image from "next/image"

interface Props {
  gallery: string[]
}

const ProjectGallery = ({ gallery }: Props) => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-4 px-6 md:px-20 pb-16">
      {gallery.map((img, idx) => (
        <div key={idx} className="relative aspect-square overflow-hidden">
          <Image src={img} alt={`Gallery image ${idx + 1}`} fill className="object-cover" />
        </div>
      ))}
    </section>
  )
}

export default ProjectGallery
