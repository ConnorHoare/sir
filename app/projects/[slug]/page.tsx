
import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import ProjectHero from "@/components/project/ProjectHero"
import ProjectOverview from "@/components/project/ProjectOverview"
import ProjectGallery from "@/components/project/ProjectGallery"
import ProjectDetails from "@/components/project/ProjectDetails"
import ProjectMap from "@/components/project/ProjectMap"

interface Props {
  params: { slug: string }
}

const ProjectPage = ({ params }: Props) => {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) return notFound()

  return (
    <>
      <ProjectHero title={project.title} image={project.image} />
      <ProjectOverview location={project.location} description={project.description} />
      <ProjectGallery gallery={project.gallery} />
      <ProjectDetails details={project.details} />
      <ProjectMap mapLink={project.mapLink} />
    </>
  )
}

export default ProjectPage
