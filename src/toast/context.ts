import { createContext, useContext } from 'react'

export type ToastActions = {
  success: (title: string, message?: string) => void
  error: (title: string, message?: string) => void
}

export const ToastContext = createContext<ToastActions | null>(null)

export function useToast() {
  const toast = useContext(ToastContext)

  if (!toast) {
    throw new Error('useToast moet binnen ToastProvider worden gebruikt')
  }

  return toast
}
