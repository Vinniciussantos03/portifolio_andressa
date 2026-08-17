import { Palette, Sparkles, TrendingUp, Users } from 'lucide-react'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import { skills } from '../data/content'

// Mapa explícito: só os ícones usados entram no bundle.
const icons = { Sparkles, Palette, Users, TrendingUp }

export default function Skills() {
  return (
    <Section
      id="competencias"
      tone="offwhite"
      eyebrow="Competências"
      title={skills.title}
      description={skills.description}
    >
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {skills.groups.map((group, index) => {
          const Icon = icons[group.icon] ?? Sparkles

          return (
            <Reveal key={group.id} delay={(index % 2) * 0.08}>
              <div className="glass-panel h-full rounded-[3px] p-7 transition-shadow duration-500 hover:shadow-[0_18px_44px_-30px_rgba(168,91,115,0.4)]">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-quartz">
                  <Icon
                    className="h-4.5 w-4.5 text-rosegold"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>

                <h3 className="mt-5 font-heading text-lg">{group.title}</h3>

                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[0.9375rem] text-slate"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-dusty"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
