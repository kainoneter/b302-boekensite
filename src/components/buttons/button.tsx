import type { ButtonHTMLAttributes } from 'react'
import type { LucideIcon } from 'lucide-react'

const variants = {
  primary: 'bg-cobalt text-white shadow-hard-sm',
  secondary: 'bg-sunny shadow-hard-sm',
  danger: 'bg-coral shadow-hard-sm',
  ghost: 'bg-transparent',
} as const

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants
  icon?: LucideIcon
}

export function Button({
  variant = 'primary',
  icon: Icon,
  children,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={`
        inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 font-bold
        cursor-pointer enabled:hover:translate-y-0.5 enabled:active:translate-y-0.5
        disabled:cursor-not-allowed disabled:opacity-50
        ${variants[variant]} ${className}
      `}
    >
      {Icon && <Icon aria-hidden="true" />}
      {children}
    </button>
  )
}
