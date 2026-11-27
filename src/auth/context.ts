import { createContext, useContext } from 'react'

type AuthContextValue = {
  token: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  clearSession: (token: string) => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)

export function useAuth() {
  const auth = useContext(AuthContext)

  return auth
}