import React, { useState } from 'react'

const Data = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center w-full px-8 py-4 bg-red-500 text-white relative">
      {/* Logo */}
      <h1 className="text-xl font-bold">Logo</h1>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-6 text-lg">
        <a href="#" className="hover:text-gray-200">Home</a>
        <a href="#" className="hover:text-gray-200">About</a>
        <a href="#" className="hover:text-gray-200">Contact</a>
        <a href="#" className="hover:text-gray-200">Shop</a>
      </div>

      {/* Icons (Always visible on desktop) */}
      <div className="hidden md:flex gap-4 text-xl">
        <span className="cursor-pointer hover:scale-110 transition">🎁</span>
        <span className="cursor-pointer hover:scale-110 transition">❤</span>
      </div>

      {/* Mobile Hamburger Icon */}
      <button
        className="md:hidden text-3xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-red-600 text-white p-6 transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <h2 className="text-2xl font-bold mb-6">Menu</h2>
        <a href="#" className="block py-2 hover:text-gray-300">Home</a>
        <a href="#" className="block py-2 hover:text-gray-300">About</a>
        <a href="#" className="block py-2 hover:text-gray-300">Contact</a>
        <a href="#" className="block py-2 hover:text-gray-300">Shop</a>

        <div className="flex gap-4 mt-6 text-2xl">
          <span className="cursor-pointer hover:scale-110 transition">🎁</span>
          <span className="cursor-pointer hover:scale-110 transition">❤</span>
        </div>
      </div>
    </nav>
  )
}

export default Data
