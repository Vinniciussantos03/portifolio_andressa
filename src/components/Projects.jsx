import Section from './ui/Section'
import Reveal from './ui/Reveal'
import ProjectCard from './ProjectCard'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <Section
      id="projetos"
      tone="offwhite"
      eyebrow="Projetos"
      title="Marcas e projetos em que trabalhei."
      description="Social media, construção de marca e cobertura de eventos — do briefing à publicação."
    >
      <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2 md:gap-y-16">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 2) * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
