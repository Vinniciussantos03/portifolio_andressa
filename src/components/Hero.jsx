import { motion } from 'motion/react'
import { ArrowDownRight, MapPin } from 'lucide-react'
import { profile } from '../data/content'
import ImageWithFallback from './ui/ImageWithFallback'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

const transition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] }

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-offwhite pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Halo rosado muito suave atrás do conteúdo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-24 h-[32rem] w-[32rem] rounded-full bg-quartz/70 blur-3xl"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
          {/* Texto */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.p
              variants={fadeUp}
              transition={transition}
              className="font-display text-2xl font-medium italic text-slate md:text-3xl"
            >
              {profile.greeting}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={transition}
              className="mt-3 font-display text-6xl leading-[1] font-normal text-graphite sm:text-7xl md:text-8xl"
            >
              {profile.firstName}
              <span className="text-rosegold">!</span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              transition={transition}
              className="mt-8 max-w-md border-t border-hairline pt-8"
            >
              <p className="font-display text-2xl leading-snug text-graphite md:text-3xl">
                {profile.role}
              </p>
              <p className="mt-3 font-ui text-[0.75rem] font-normal tracking-[0.18em] text-rosegold-ink uppercase">
                {profile.subtitle}
              </p>

              <p className="mt-6 flex items-center gap-2 text-sm text-slate">
                <MapPin className="h-4 w-4 text-dusty" strokeWidth={1.5} aria-hidden="true" />
                {profile.location}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={transition}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projetos"
                className="group inline-flex items-center gap-2 rounded-full bg-rosegold px-7 py-3.5 font-ui text-sm text-white transition-colors duration-300 hover:bg-rosegold-ink"
              >
                Ver projetos
                <ArrowDownRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </a>

              <a
                href="#contato"
                className="inline-flex items-center rounded-full border border-hairline px-7 py-3.5 font-ui text-sm text-graphite transition-colors duration-300 hover:bg-quartz"
              >
                Fale comigo
              </a>
            </motion.div>
          </motion.div>

          {/* Retrato */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.15 }}
            className="relative mx-auto w-full max-w-sm md:max-w-none"
          >
            <ImageWithFallback
              src={profile.photo}
              alt={profile.photoAlt}
              aspect="3/4"
              className="rounded-[2px] shadow-[0_24px_60px_-32px_rgba(168,91,115,0.35)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[2px] border border-hairline"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
