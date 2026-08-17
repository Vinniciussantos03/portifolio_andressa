import ImageWithFallback from './ui/ImageWithFallback'

export default function ProjectCard({ project }) {
  return (
    <article className="group">
      <ImageWithFallback
        src={project.image}
        alt={project.title}
        aspect="4/3"
        fit={project.imageFit ?? 'cover'}
        className="rounded-[2px] border border-hairline"
        imageClassName="transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
      >
        {/* Overlay rose gold discreto no hover */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-rosegold opacity-0 transition-opacity duration-500 group-hover:opacity-[0.06]"
        />
      </ImageWithFallback>

      <div className="mt-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-quartz px-3 py-1 font-heading text-[0.6875rem] tracking-wide text-rosegold-ink">
            {project.tag}
          </span>
          {project.year ? (
            <span className="font-heading text-[0.6875rem] tracking-wide text-slate/70">
              {project.year}
            </span>
          ) : null}
        </div>

        <h3 className="mt-3 font-heading text-xl text-graphite transition-colors duration-300 group-hover:text-rosegold-ink">
          {project.title}
        </h3>

        {project.client ? (
          <p className="mt-0.5 font-heading text-sm font-light text-slate/80">
            {project.client}
          </p>
        ) : null}

        <p className="mt-3 text-[0.9375rem] leading-relaxed text-slate">
          {project.description}
        </p>
      </div>
    </article>
  )
}
