import { ArrowRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import heroShapes from '../../assets/hero-shapes.svg'
import { Badge } from '../../components/badge'
import { Button } from '../../components/buttons/button'
import { Input } from '../../components/input'
import { Logo } from '../../components/logo'
import { useState, type SubmitEvent } from 'react'
import { useAuth } from '../../auth/context'

export function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();
    
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = String(formData.get('email'))
        const password = String(formData.get('password'))

        setLoading(true)
        setError(null)

        try {
            await login(email, password)
            navigate('/books', {replace: true})
        } catch {
            setError('Inloggen mislukt. Controleer je gegevens.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="grid min-h-dvh bg-canvas md:grid-cols-[55fr_45fr]">
        <div className="flex flex-col items-start justify-between gap-8 bg-cobalt px-6 py-8 text-white md:border-r-2 md:border-ink md:px-[5.5vw] md:py-[clamp(2rem,7vh,5rem)]">
            <Logo textColor="text-white" />

            <img
            src={heroShapes}
            alt=""
            width={521}
            height={361}
            className="h-auto w-full max-w-[88%]"
            />

            <p className="font-display text-[clamp(2rem,9vw,4.5rem)] leading-none md:text-[clamp(2.5rem,5.625vw,4.5rem)]">
            Welkom terug,<br />
            <em>boekenwurm.</em>
            </p>
        </div>

        <div className="grid place-items-center px-6 py-10">
            <section
            aria-labelledby="login-title"
            className="w-full max-w-[25rem] rounded-xl border-2 border-ink bg-surface p-6 shadow-hard"
            >
            <Badge type="admin" />
            <h1 id="login-title" className="mt-2 font-display text-4xl leading-none xl:text-[2.5rem]">
                Inloggen
            </h1>

            <form className="mt-5 grid gap-4" onSubmit={handleSubmit}>
                <Input
                id="login-email"
                label="E-mailadres"
                name="email"
                type="email"
                autoComplete="username"
                placeholder="admin@admin.com"
                required
                />
                <Input
                id="login-password"
                label="Wachtwoord"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                />
                <Button type="submit" className="w-full justify-center text-sm" disabled={loading}>
                Inloggen
                </Button>
            </form>

            <p className="mt-5 text-sm text-ink-soft">
                Zonder login kun je alles bekijken. Genres toevoegen, wijzigen of verwijderen mag alleen een admin.
            </p>
            <Link
                to="/books"
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-cobalt hover:underline"
            >
                Verder zonder inloggen <ArrowRight aria-hidden="true" className="size-4!" />
            </Link>
            </section>
        </div>
        </main>
    )
}
