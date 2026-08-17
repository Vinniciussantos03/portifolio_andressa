import { useEffect, useState } from 'react'

/**
 * Observa as seções da página e devolve o id daquela que está visível.
 * Usado para sublinhar o item correspondente na navbar.
 */
/*
 * offset = 120px: um pouco acima do scroll-mt-24 (96px) das seções, para
 * que a seção recém-ancorada já conte como ativa.
 */
export function useScrollSpy(sectionIds, offset = 120) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? null)

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (sections.length === 0) return

    const handler = () => {
      // A seção ativa é a última cujo topo já passou da linha de referência.
      let current = sections[0].id

      for (const section of sections) {
        if (section.getBoundingClientRect().top - offset <= 0) {
          current = section.id
        }
      }

      // No fim da página, garante que o último item fique marcado.
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2
      if (atBottom) current = sections[sections.length - 1].id

      setActiveId(current)
    }

    handler()
    window.addEventListener('scroll', handler, { passive: true })
    window.addEventListener('resize', handler)

    return () => {
      window.removeEventListener('scroll', handler)
      window.removeEventListener('resize', handler)
    }
  }, [sectionIds, offset])

  return activeId
}
