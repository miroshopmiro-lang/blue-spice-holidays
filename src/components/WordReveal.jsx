import { motion } from 'framer-motion'

// Word-by-word masked reveal for editorial headlines.
// Each word sits in an overflow-hidden line; words rise from below.
export function WordReveal({ text, className = '', delay = 0, wordClassName = '' }) {
  const words = text.split(' ')
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom pb-[0.18em] -mb-[0.18em]"
          aria-hidden="true"
        >
          <motion.span
            className={`inline-block ${wordClassName}`}
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
