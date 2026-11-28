import { useEffect, useState, type ReactNode } from 'react'
import { AuthContext } from './context'
import { login as requestLogin, logout as requestLogout } from '../services/auth'

type Session = {
    token: string
    expiresAt: number
}

export function AuthProvider({ children }: { children: ReactNode }) {
    const [session, setSession] = useState<Session | null>(null)

    const token = session?.token ?? null    

    useEffect(() => {
        if (!session) return

        const timeout = window.setTimeout(() => {
            setSession(null)
        }, Math.max(0, session.expiresAt - Date.now()))

        return () => window.clearTimeout(timeout)
    }, [session])

    async function login(email: string, password: string) {
        const { access_token, expires_in } = await requestLogin(email, password)

        setSession({
            token: access_token,
            expiresAt: Date.now() + expires_in * 1000,
        })
    }

    function clearSession() {
        setSession(null)
    }

    async function logout() {
        if (!token) return

        await requestLogout(token)
        clearSession()
    }

    return (
        <AuthContext.Provider value={{ token, login, logout, clearSession }}>
            {children}
        </AuthContext.Provider>
    )
}