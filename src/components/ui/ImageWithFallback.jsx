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
          className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 bg-gradient-to-br from-quartz via-quartz/75 to-offwhite"
          role="presentation"
        >
          <ImageIcon
            className="h-7 w-7 text-dusty"
            strokeWidth={1.25}
            aria-hidden="true"
          />
          {alt ? (
            <span className="max-w-[75%] text-center font-heading text-[0.6875rem] leading-snug tracking-wide text-rosegold-ink/70">
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
