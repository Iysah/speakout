// import { Link } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import ResponsiveMenu from './ResponsiveMenu'

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <header className="bg-primary text-white">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">Speak<span className=' text-red-500'>Out</span></Link>
                <ResponsiveMenu />
                <nav className="hidden md:block">
                    <ul className="flex space-x-4">
                    <li><Link href="/" className="hover:underline">Home</Link></li>
                    <li><Link href="/about" className="hover:underline">About</Link></li>
                    <li><Link href="/report" className="hover:underline">Report Case</Link></li>
                    <li><Link href="/feedback" className="hover:underline">Feedback</Link></li>
                    <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                    </ul>
                </nav>

                <span className='flex space-x-4 items-center'>
                    <Link href={'/auth/login'} className="hover:underline">Login</Link>
                    <Link href={'/auth/register'} className='rounded-full px-4 py-2 bg-blue-600'>Register</Link>
                </span>
                </div>
            </div>
            </header>
        </nav>
    </>
  )
}

export default Navbar