import Link from 'next/link'
import Logo from '../logo'

export function Header () {
  return (
    <header className="w-full bg-sand">
      <div className="w-full">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-8 py-6 text-forest">
          
          <div>
            <Logo className="w-40" />
          </div>

          <nav className="flex items-center gap-6 text-lg font-medium">
            <Link href="/">Home</Link>
            <Link href="/#about">About</Link>
            <Link href="/#contact">Contact</Link>
            <button className="bg-salmon text-white px-5 py-2  rounded-2xl font-semibold text-lg">
              Login
            </button>
          </nav>
          
        </div>
      </div>
    </header>
  )
}
