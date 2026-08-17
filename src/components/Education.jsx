import { GraduationCap } from 'lucide-react'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import { education } from '../data/content'

export default function Education() {
  return (
    <Section id="formacao" tone="base" eyebrow="Formação" title={education.title}>
      <div className="mt-14 max-w-3xl">
        {education.items.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.08}>
            <div className="flex gap-5 border-t border-hairline pt-8 md:gap-8">
              <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-quartz">
                <GraduationCap
                  className="h-4.5 w-4.5 text-rosegold"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </span>

              <div>
                <h3 className="font-heading text-xl">{item.course}</h3>

                <p className="mt-1 font-heading text-sm text-rosegold-ink">
                  {item.status}
                </p>

                {/* Enquanto a instituição não for informada, o campo fica
                    visível em estado neutro — sem inventar o nome. */}
                <p className="mt-1 text-sm text-slate/70">
                  {item.institution ?? 'Instituição a definir'}
                </p>

                {item.description ? (
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-slate">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
