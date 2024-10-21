"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function ResponsiveMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="md:hidden">
      <button 
        className="text-white"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isMenuOpen && (
        <nav className="absolute left-0 right-0 bg-primary">
          <ul className="flex flex-col items-center py-4">
            <li className="py-2"><Link href="/" className="text-white hover:underline" onClick={toggleMenu}>Home</Link></li>
            <li className="py-2"><Link href="/about" className="text-white hover:underline" onClick={toggleMenu}>About</Link></li>
            <li className="py-2"><Link href="/report" className="text-white hover:underline" onClick={toggleMenu}>Report Case</Link></li>
            <li className="py-2"><Link href="/feedback" className="text-white hover:underline" onClick={toggleMenu}>Feedback</Link></li>
            <li className="py-2"><Link href="/contact" className="text-white hover:underline" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </nav>
      )}
    </div>
  )
}