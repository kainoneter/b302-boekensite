import { useMemo, useState, type ReactNode } from 'react'
import { Toast } from '../components/toast'
import { ToastContext, type ToastActions } from './context'

type ToastNotification = {
  id: number
  type: keyof ToastActions
  title: string
  message?: string
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [notification, setNotification] = useState<ToastNotification | null>(null)

  const actions = useMemo<ToastActions>(() => {
    function showToast(type: ToastNotification['type'], title: string, message?: string) {
      setNotification(current => ({ id: (current?.id ?? 0) + 1, type, title, message }))
    }

    return {
      success: (title, message) => showToast('success', title, message),
      error: (title, message) => showToast('error', title, message),
    }
  }, [])

  return (
    <ToastContext.Provider value={actions}>
      {children}

      <div className="sr-only" role="status">
        {notification?.type === 'success' && <span>{notification.title} {notification.message}</span>}
      </div>
      <div className="sr-only" role="alert">
        {notification?.type === 'error' && <span>{notification.title} {notification.message}</span>}
      </div>

      {notification && (
        <Toast
          key={notification.id}
          type={notification.type}
          title={notification.title}
          message={notification.message}
          dismissAfter={notification.type === 'error' ? 8000 : 4000}
          dismissible={notification.type === 'error'}
          onClose={() => setNotification(current => current === notification ? null : current)}
        />
      )}
    </ToastContext.Provider>
  )
}
