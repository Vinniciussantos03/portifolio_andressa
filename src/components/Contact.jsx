import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
} from 'lucide-react'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import { contact, profile } from '../data/content'

const icons = { Mail, Phone, MessageCircle, Linkedin, Instagram }

/**
 * Cada canal vira um link ativo quando "value" e "href" estão
 * preenchidos em src/data/content.js. Sem dado, o card aparece em
 * estado neutro ("a definir") — o lugar existe no layout desde já.
 */
function ChannelCard({ channel }) {
  const Icon = icons[channel.icon] ?? Mail
  const isFilled = Boolean(channel.value)

  const inner = (
    <>
      <span
        className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
          isFilled ? 'bg-quartz group-hover:bg-rosegold' : 'bg-mist'
        }`}
      >
        <Icon
          className={`h-4.5 w-4.5 transition-colors duration-300 ${
            isFilled
              ? 'text-rosegold group-hover:text-white'
              : 'text-dusty'
          }`}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </span>

      <span className="min-w-0">
        <span className="block font-heading text-[0.6875rem] tracking-[0.18em] text-slate/70 uppercase">
          {channel.label}
        </span>
        <span
          className={`mt-0.5 block truncate text-[0.9375rem] ${
            isFilled ? 'text-graphite' : 'text-slate/50 italic'
          }`}
        >
          {channel.value ?? 'a definir'}
        </span>
      </span>

      {isFilled ? (
        <ArrowUpRight
          className="ml-auto h-4 w-4 shrink-0 text-dusty transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      ) : null}
    </>
  )

  const baseClass =
    'group flex items-center gap-4 rounded-[3px] border border-hairline bg-base p-5'

  if (!isFilled) {
    return <div className={baseClass}>{inner}</div>
  }

  const isExternal = channel.href?.startsWith('http')

  return (
    <a
      href={channel.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`${baseClass} transition-shadow duration-500 hover:shadow-[0_18px_44px_-30px_rgba(168,91,115,0.45)]`}
    >
      {inner}
    </a>
  )
}

export default function Contact() {
  return (
    <Section id="contato" tone="offwhite">
      <div className="grid gap-12 md:grid-cols-[0.45fr_0.55fr] md:gap-16">
        <Reveal>
          <p className="eyebrow">Contato</p>

          <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
            {contact.headline}
          </h2>

          <p className="mt-5 text-[1.0625rem] leading-relaxed text-slate">
            {contact.description}
          </p>

          <p className="mt-8 font-display text-lg italic text-rosegold-ink">
            {profile.location}
          </p>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2">
          {contact.channels.map((channel, index) => (
            <Reveal key={channel.id} delay={index * 0.06}>
              <ChannelCard channel={channel} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
