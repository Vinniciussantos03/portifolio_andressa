import { useEffect, useState } from 'react'
import { Image as ImageIcon } from 'lucide-react'

/**
 * Imagem com degradação elegante.
 *
 * Se o arquivo ainda não existe em /public/images, em vez de um ícone
 * de imagem quebrada aparece um bloco em rosa quartzo com a mesma
 * proporção — o layout fica idêntico com ou sem as fotos, sem
 * deslocamento de conteúdo.
 */
export default function ImageWithFallback({
  src,
  alt = '',
  aspect = '4/3',
  fit = 'cover',
  tone = null,
  className = '',
  imageClassName = '',
  children,
}) {
  const [failed, setFailed] = useState(!src)

  // Se o caminho mudar (troca de conteúdo), volta a tentar carregar.
  useEffect(() => {
    setFailed(!src)
  }, [src])

  const showPlaceholder = failed || !src

  return (
    <div
      className={`relative overflow-hidden bg-quartz ${className}`}
      style={{ aspectRatio: aspect }}
    >
      {showPlaceholder ? (
        <div
          className={
            'absolute inset-0 flex flex-col items-center justify-center gap-2.5' +
            (tone ? '' : ' bg-gradient-to-br from-quartz via-quartz/75 to-offwhite')
          }
          /* Com "tone", o placeholder assume as cores dominantes da foto
             que vai entrar ali — a prévia mostra a composição de cores
             real da página antes de os arquivos existirem. */
          style={
            tone
              ? { backgroundImage: `linear-gradient(140deg, ${tone[0]}, ${tone[1]})` }
              : undefined
          }
          role="presentation"
        >
          {/* Vinheta: sem ela o gradiente lê como cor sólida, não como foto */}
          {tone ? (
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(120% 90% at 50% 35%, transparent 35%, rgba(0,0,0,0.45) 100%)',
              }}
            />
          ) : null}

          <ImageIcon
            className={`relative h-7 w-7 ${tone ? 'text-white/55' : 'text-dusty'}`}
            strokeWidth={1.25}
            aria-hidden="true"
          />
          {alt ? (
            <span
              className={`relative max-w-[75%] text-center font-ui text-[0.6875rem] leading-snug tracking-wide ${
                tone ? 'text-white/75' : 'text-rosegold-ink/70'
              }`}
            >
              {alt}
            </span>
          ) : null}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full ${
            fit === 'contain' ? 'object-contain p-8' : 'object-cover'
          } ${imageClassName}`}
        />
      )}

      {children}
    </div>
  )
}
