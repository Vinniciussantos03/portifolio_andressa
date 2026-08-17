import Reveal from './Reveal'

/**
 * Moldura padrão das seções: espaçamento vertical generoso (o principal
 * veículo do minimalismo), sobrescrição opcional do fundo e um
 * cabeçalho consistente com eyebrow + título + descrição.
 */
export default function Section({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'base',
  children,
  className = '',
}) {
  const backgrounds = {
    base: 'bg-base',
    offwhite: 'bg-offwhite',
    mist: 'bg-mist',
  }

  const isCentered = align === 'center'

  return (
    <section
      id={id}
      className={`scroll-mt-24 py-24 md:py-32 ${backgrounds[tone]} ${className}`}
    >
      <div className="container-page">
        {(eyebrow || title || description) && (
          <Reveal
            className={`max-w-2xl ${isCentered ? 'mx-auto text-center' : ''}`}
          >
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}

            {title ? (
              <h2 className="mt-4 text-3xl md:text-4xl">{title}</h2>
            ) : null}

            {description ? (
              <p className="mt-4 text-base leading-relaxed text-slate">
                {description}
              </p>
            ) : null}

            <div
              className={`mt-8 h-px w-16 bg-dusty/40 ${isCentered ? 'mx-auto' : ''}`}
              aria-hidden="true"
            />
          </Reveal>
        )}

        {children}
      </div>
    </section>
  )
}
