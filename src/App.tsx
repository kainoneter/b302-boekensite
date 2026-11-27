import './App.css'
import { Navbar } from './components/navigation/navbar'
import { Logo } from './components/logo'
import { Account } from './components/account'

function App() {
  return (
    <>
      <header className='sticky top-0 z-10 flex items-center justify-between border-b-2 border-ink bg-canvas px-20 py-5'>
        <Logo/>
        <Navbar/>
        <Account/>
      </header>
    </>
  )
}

export default App
