// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import logo from '@/public/logo.png' 

// const navLinks = [
//   { name: 'Services', href: '/services' },
//   { name: 'About', href: '/about' },
//   { name: 'Compliance', href: '/compliance' },
//   { name: 'Contact', href: '/contact' },
// ]

// const Navbar = () => {
//   const pathname = usePathname()

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-transparent px-6 md:px-20 py-8 hidden md:flex justify-between items-center">
//       {/* Logo */}
//       <Link href="/" className="flex items-center">
//         <Image src='/images/logo.svg' alt="Logo" width={80} height={60} className="object-contain" />
//       </Link>

//       {/* Navigation Menu */}
//       <nav className="bg-zinc-900/90 rounded-full px-8 py-4 flex gap-8 text-white font-medium backdrop-blur-sm shadow-lg">
//         {navLinks.map(({ name, href }) => {
//           const isActive = pathname === href
//           return (
//             <Link
//               key={name}
//               href={href}
//               className={`transition-colors ${
//                 isActive ? 'text-zinc-300' : 'hover:text-yellow-400'
//               }`}
//             >
//               {name}
//             </Link>
//           )
//         })}
//       </nav>
//     </header>
//   )
// }

// export default Navbar

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Compliance', href: '/compliance' },
  { name: 'Contact', href: '/contact' },
]

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent px-6 md:px-20 py-8 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="flex items-center z-50">
        <Image src='/images/logo.svg' alt="Logo" width={80} height={60} className="object-contain" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex bg-zinc-900/90 rounded-full px-8 py-4 gap-8 text-white font-medium backdrop-blur-sm shadow-lg">
        {navLinks.map(({ name, href }) => {
          const isActive = pathname === href
          return (
            <Link
              key={name}
              href={href}
              className={`transition-colors ${
                isActive ? 'text-zinc-300' : 'hover:text-yellow-400'
              }`}
            >
              {name}
            </Link>
          )
        })}
      </nav>

      {/* Mobile Menu Button */}
      <button
        aria-label="Toggle Menu"
        onClick={toggleMenu}
        className="md:hidden z-50 bg-neutral-400 w-12 h-12 rounded-full flex items-center justify-center"
      >
        {isOpen ? (
          <IoClose className="text-white text-2xl" />
        ) : (
          <HiMenu className="text-black text-2xl" />
        )}
      </button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed top-0 right-0 w-full h-full bg-black text-white flex flex-col items-start justify-center gap-8 px-10 text-xl font-semibold md:hidden z-40"
          >
            {navLinks.map(({ name, href }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={name}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors ${
                    isActive ? 'text-zinc-300' : 'hover:text-yellow-400'
                  }`}
                >
                  {name}
                </Link>
              )
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
