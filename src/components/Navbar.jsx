import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { navigation, profile } from '../data/content'
import { useScrollSpy } from '../hooks/useScrollSpy'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const sectionIds = useMemo(() => navigation.map((item) => item.id), [])
  const activeId = useScrollSpy(sectionIds)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Trava o scroll do corpo enquanto o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ${
        scrolled
          ? 'glass-panel border-x-0 border-t-0 shadow-[0_1px_24px_rgba(168,91,115,0.06)]'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="container-page flex h-20 items-center justify-between"
      >
        <a
          href="#inicio"
          className="font-display text-lg tracking-tight text-graphite transition-colors hover:text-rosegold-ink"
        >
          {profile.fullName}
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-9 md:flex">
          {navigation.map((item) => {
            const isActive = activeId === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative font-ui text-[0.8125rem] tracking-wide transition-colors ${
                    isActive
                      ? 'text-rosegold-ink'
                      : 'text-slate hover:text-graphite'
                  }`}
                >
                  {item.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 h-px w-full bg-rosegold"
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    />
                  ) : null}
                </a>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-graphite transition-colors hover:bg-quartz md:hidden"
        >
          {menuOpen ? (
            <X className="h-5 w-5" strokeWidth={1.5} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* Mobile */}
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel border-x-0 border-b border-t md:hidden"
          >
            <ul className="container-page flex flex-col py-4">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`block border-b border-hairline py-3.5 font-ui text-sm tracking-wide last:border-b-0 ${
                      activeId === item.id ? 'text-rosegold-ink' : 'text-slate'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
