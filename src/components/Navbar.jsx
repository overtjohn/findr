import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-yellow-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-extrabold gradient-text tracking-tighter">FINDR</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <NavLink to="/about">About</NavLink>
              <NavLink to="/tokenomics">Tokenomics</NavLink>
              <NavLink to="/ai">AI Features</NavLink>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold tracking-tight"
              >
                Connect Wallet
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 font-medium tracking-tight"
    >
      {children}
    </Link>
  )
}
