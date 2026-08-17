import Reveal from './ui/Reveal'
import { profile } from '../data/content'

export default function About() {
  return (
    <section id="sobre" className="scroll-mt-24 bg-base py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-[0.35fr_0.65fr] md:gap-16">
          <Reveal>
            <p className="eyebrow">Sobre</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
              {profile.bioTitle}
            </h2>
          </Reveal>

          <div className="space-y-5">
            {profile.bio.map((paragraph, index) => (
              <Reveal key={index} delay={index * 0.08}>
                <p className="text-[1.0625rem] leading-relaxed text-slate">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
