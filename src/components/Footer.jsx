import { ArrowUp } from 'lucide-react'
import { profile } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-hairline bg-base py-10">
      <div className="container-page flex flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="font-display text-base text-graphite">
          {profile.fullName}
        </p>

        <p className="text-center text-[0.8125rem] text-slate/70 sm:text-left">
          © {year} · {profile.role} · {profile.location}
        </p>

        <a
          href="#inicio"
          aria-label="Voltar ao início"
          className="group inline-flex items-center gap-2 font-heading text-[0.8125rem] text-slate transition-colors hover:text-rosegold"
        >
          Ao topo
          <ArrowUp
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </a>
      </div>
    </footer>
  )
}
