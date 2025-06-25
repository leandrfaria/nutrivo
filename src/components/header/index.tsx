'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from '../logo'
import { FiMenu, FiX } from 'react-icons/fi'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-sand z-50">
      <div className="w-full">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-6 py-5 text-forest relative">

          <Link href="/">
            <Logo className="w-36 sm:w-40" />
          </Link>


          <nav className="hidden md:flex items-center gap-6 text-lg font-medium">
            <Link href="/">Home</Link>
            <Link href="/#about">About</Link>
            <Link href="/#contact">Contact</Link>
            <Link
              href="/login"
              className="inline-block bg-salmon text-white px-5 py-2 rounded-full font-semibold text-lg"
            >
              Login
            </Link>
          </nav>


          <button
            className="md:hidden text-3xl text-forest"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Menu Mobile */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
            }`}
          >
            <div className="flex flex-col items-start p-6 gap-6 text-lg font-medium text-forest">
              <button
                onClick={() => setIsOpen(false)}
                className="self-end text-3xl mb-4"
                aria-label="Close menu"
              >
                <FiX />
              </button>

              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="transition-all duration-300 transform hover:translate-x-1 hover:text-salmon"
              >
                Home
              </Link>
              <Link
                href="/#about"
                onClick={() => setIsOpen(false)}
                className="transition-all duration-300 transform hover:translate-x-1 hover:text-salmon"
              >
                About
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="transition-all duration-300 transform hover:translate-x-1 hover:text-salmon"
              >
                Contact
              </Link>

              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="inline-block bg-salmon text-white px-5 py-2 rounded-full font-semibold text-base mt-2 transition hover:bg-[#dd8d74]"
              >
                Login
              </Link>
            </div>
          </div>

          <div
            className={`fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden transition-opacity duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setIsOpen(false)}
          />
        </div>
      </div>
    </header>
  )
}
