import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import ImageWithFallback from './ui/ImageWithFallback'
import { gallery } from '../data/content'

/**
 * Carrossel de bastidores.
 *
 * A rolagem é nativa (scroll-snap) e as setas só empurram o container —
 * assim o arraste no celular e a navegação por teclado continuam
 * funcionando de graça, e não há estado de índice para dessincronizar.
 */
export default function Gallery() {
  const trackRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const syncArrows = useCallback(() => {
    const track = trackRef.current
    if (!track) return

    const max = track.scrollWidth - track.clientWidth
    setAtStart(track.scrollLeft <= 4)
    // max <= 0 significa que tudo já cabe na tela: nada a rolar.
    setAtEnd(max <= 0 || track.scrollLeft >= max - 4)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    syncArrows()
    track.addEventListener('scroll', syncArrows, { passive: true })
    window.addEventListener('resize', syncArrows)

    return () => {
      track.removeEventListener('scroll', syncArrows)
      window.removeEventListener('resize', syncArrows)
    }
  }, [syncArrows])

  const slide = (direction) => {
    const track = trackRef.current
    if (!track) return

    const card = track.querySelector('[data-slide]')
    const gap = 16
    const amount = card
      ? card.getBoundingClientRect().width + gap
      : track.clientWidth * 0.8

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.scrollBy({
      left: direction * amount,
      behavior: reduced ? 'auto' : 'smooth',
    })
  }

  return (
    <Section
      id="bastidores"
      tone="base"
      eyebrow="Galeria"
      title={gallery.title}
      description={gallery.description}
    >
      <Reveal className="mt-12">
        <div className="flex items-center justify-between gap-4">
          <p className="font-ui text-[0.75rem] tracking-[0.18em] text-slate/70 uppercase">
            {gallery.items.length} fotos
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => slide(-1)}
              disabled={atStart}
              aria-label="Foto anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-graphite transition-all duration-300 hover:bg-quartz disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => slide(1)}
              disabled={atEnd}
              aria-label="Próxima foto"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-graphite transition-all duration-300 hover:bg-quartz disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          role="group"
          aria-label="Carrossel de bastidores"
          tabIndex={0}
          className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
        >
          {gallery.items.map((item) => (
            <figure
              key={item.id}
              data-slide
              className="group w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[31.5%]"
            >
              <ImageWithFallback
                src={item.image}
                alt={item.caption ?? 'Bastidores'}
                tone={item.tone}
                aspect="4/5"
                className="rounded-[2px] border border-hairline"
                imageClassName="transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-graphite opacity-0 transition-opacity duration-500 group-hover:opacity-[0.05]"
                />
              </ImageWithFallback>

              {item.caption ? (
                <figcaption className="mt-3 font-ui text-[0.75rem] tracking-[0.12em] text-slate/80 uppercase">
                  {item.caption}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
