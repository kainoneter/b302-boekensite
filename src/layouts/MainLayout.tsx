import { Outlet } from 'react-router-dom'
import { Account } from '../components/account'
import { Logo } from '../components/logo'
import { Navbar } from '../components/navigation/navbar'

export function MainLayout() {
  return (
    <>
      <header className="sticky top-0 z-10 flex items-center justify-between border-b-2 border-ink bg-canvas px-20 py-5">
        <Logo />
        <Navbar />
        <Account />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}