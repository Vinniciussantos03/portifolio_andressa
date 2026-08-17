import Section from './ui/Section'
import Reveal from './ui/Reveal'
import ImageWithFallback from './ui/ImageWithFallback'
import { gallery } from '../data/content'

export default function Gallery() {
  return (
    <Section
      id="bastidores"
      tone="base"
      align="center"
      eyebrow="Galeria"
      title={gallery.title}
      description={gallery.description}
    >
      <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {gallery.items.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.06}>
            <figure className="group">
              <ImageWithFallback
                src={item.image}
                alt={item.caption ?? 'Bastidores'}
                aspect="1/1"
                className="rounded-[2px] border border-hairline"
                imageClassName="transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-graphite opacity-0 transition-opacity duration-500 group-hover:opacity-[0.05]"
                />
              </ImageWithFallback>

              {item.caption ? (
                <figcaption className="mt-3 text-center font-heading text-[0.75rem] tracking-wide text-slate/80">
                  {item.caption}
                </figcaption>
              ) : null}
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
