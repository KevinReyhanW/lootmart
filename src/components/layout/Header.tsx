"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import lootmartIcon from '@/assets/images/icons/lootmart-icon.png'
import buttonTile from '@/assets/images/ui/button/button-brown.png'

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [cartCount] = useState(3) // Example cart count
  const pathname = usePathname()

  // Navigation items
  const navItems = [
    { name: 'Shop', path: '/products' },
    { name: 'Categories', path: '/categories' },
    { name: 'Deals', path: '/deals' }
  ]

  return (
    <header className="fixed top-0 w-full bg-[#f0d8b0] z-50 border-b-4 border-b-[#7a5c2d] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
          >
            <Image 
              src={lootmartIcon} 
              alt="LootMart" 
              width={48} 
              height={48} 
              priority 
              className="rounded-sm"
            />
            <span className="text-2xl font-bold text-[#5a3921] hidden sm:block font-pixel">LootMart</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="relative px-5 py-2 text-sm font-bold text-[#5a3921] hover:scale-105 transition-transform"
                style={{
                  backgroundImage: `url(${buttonTile.src})`,
                  backgroundSize: "100% 100%",
                  imageRendering: "pixelated",
                  border: pathname === item.path ? '2px solid #5a3921' : '2px solid transparent'
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full flex items-stretch border-2 border-[#7a5c2d] rounded-sm">
              <input
                type="search"
                placeholder="Search for items..."
                className="w-full px-4 py-2 bg-white focus:outline-none"
              />
              <button 
                className="px-4 text-[#5a3921] font-bold hover:opacity-90 transition-opacity"
                style={{
                  backgroundImage: `url(${buttonTile.src})`,
                  backgroundSize: "100% 100%",
                  imageRendering: "pixelated",
                  borderLeft: '2px solid #7a5c2d'
                }}
              >
                <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side Items */}
          <div className="flex items-center space-x-3">
            {/* Mobile Search Toggle */}
            <button 
              className="md:hidden p-2 text-[#5a3921] hover:scale-105 transition-transform"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              style={{
                backgroundImage: `url(${buttonTile.src})`,
                backgroundSize: "100% 100%",
                imageRendering: "pixelated",
                width: "44px",
                height: "44px"
              }}
            >
              <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Cart */}
            <Link 
              href="/cart" 
              className="relative p-2 text-[#5a3921] hover:scale-105 transition-transform"
              style={{
                backgroundImage: `url(${buttonTile.src})`,
                backgroundSize: "100% 100%",
                imageRendering: "pixelated",
                width: "44px",
                height: "44px"
              }}
            >
              <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#f0d8b0] font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User Actions */}
            <div className="hidden sm:flex items-center space-x-3">
              <Link 
                href="/auth/login" 
                className="px-4 py-2 text-sm font-bold text-[#5a3921] hover:scale-105 transition-transform text-center"
                style={{
                  backgroundImage: `url(${buttonTile.src})`,
                  backgroundSize: "100% 100%",
                  imageRendering: "pixelated",
                  minWidth: "90px"
                }}
              >
                Sign in
              </Link>
              <Link 
                href="/auth/register" 
                className="px-4 py-2 text-sm font-bold text-[#5a3921] hover:scale-105 transition-transform text-center"
                style={{
                  backgroundImage: `url(${buttonTile.src})`,
                  backgroundSize: "100% 100%",
                  imageRendering: "pixelated",
                  minWidth: "90px"
                }}
              >
                Sign up
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="p-2 text-[#5a3921] hover:scale-105 transition-transform md:hidden"
              style={{
                backgroundImage: `url(${buttonTile.src})`,
                backgroundSize: "100% 100%",
                imageRendering: "pixelated",
                width: "44px",
                height: "44px"
              }}
            >
              <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search (Expandable) */}
        {isSearchOpen && (
          <div className="pb-4 md:hidden">
            <div className="relative mt-3 flex items-stretch border-2 border-[#7a5c2d] rounded-sm">
              <input 
                type="search"
                placeholder="Search for items..."
                className="w-full px-4 py-2 bg-white focus:outline-none"
              />
              <button 
                className="px-4 text-[#5a3921] font-bold hover:opacity-90 transition-opacity"
                style={{
                  backgroundImage: `url(${buttonTile.src})`,
                  backgroundSize: "100% 100%",
                  imageRendering: "pixelated",
                  borderLeft: '2px solid #7a5c2d'
                }}
              >
                <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}