import { motion } from 'motion/react'

/**
 * Entrada discreta no scroll: 16px de deslocamento e fade.
 * O movimento é sutil por decisão de projeto — nada de paralaxe.
 * Quem usa "prefers-reduced-motion" recebe apenas o fade (ver index.css).
 */
export default function Reveal({
  children,
  delay = 0,
  as = 'div',
  className = '',
  ...rest
}) {
  const Component = motion[as] ?? motion.div

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Component>
  )
}
