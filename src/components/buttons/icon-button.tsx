import type { ButtonHTMLAttributes } from 'react'
import { Pencil, Trash2 } from 'lucide-react'

const actions = {
  edit: { icon: Pencil, background: 'bg-white' },
  delete: { icon: Trash2, background: 'bg-coral-soft' },
} as const

type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  action: keyof typeof actions
  'aria-label': string
}

export function IconButton({
  action,
  className = '',
  type = 'button',
  ...props
}: IconButtonProps) {
  const { icon: Icon, background } = actions[action]

  return (
    <button
      {...props}
      type={type}
      className={`
        grid size-9 place-items-center rounded-xl border-2 border-ink shadow-hard-sm
        cursor-pointer transition-all enabled:hover:translate-y-0.5
        disabled:cursor-not-allowed disabled:opacity-50
        ${background} ${className}
      `}
    >
      <Icon aria-hidden="true" />
    </button>
  )
}
