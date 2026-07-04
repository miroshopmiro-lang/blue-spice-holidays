import { Magnetic } from './Magnetic'

export function Button({ as = 'a', variant = 'primary', size = 'normal', magnetic = false, className = '', children, ...rest }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-[transform,background-color,box-shadow,color] duration-300 ease-lux [touch-action:manipulation] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2'
  
  const sizes = {
    normal: 'px-7 py-3.5 text-[15px]',
    sm: 'px-5 py-2 text-sm',
  }

  const variants = {
    primary: 'bg-navy text-white shadow-soft hover:bg-[#0a2659] hover:shadow-float',
    gold: 'bg-gold text-ink shadow-soft hover:shadow-gold',
    secondary: 'bg-white text-ink shadow-soft ring-1 ring-hairline hover:ring-royal/40',
    ghost: 'text-ink hover:text-royal',
    glassGold: 'bg-navy/70 backdrop-blur-md text-gold ring-1 ring-gold/50 hover:bg-navy/85 hover:ring-gold/70 shadow-soft',
    glassNavy: 'bg-white/70 backdrop-blur-md text-navy ring-1 ring-navy/40 hover:bg-white/90 hover:ring-navy/60 shadow-soft',
  }
  const Comp = as === 'a' && rest.onClick && !rest.href ? 'button' : as
  const button = (
    <Comp className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Comp>
  )
  return magnetic ? <Magnetic strength={0.35}>{button}</Magnetic> : button
}
