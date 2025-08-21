"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import styles from '@/styles/components/Header.module.css'
import lootmartIcon from '@/assets/images/icons/lootmart-icon.png'
import buttonTile from '@/assets/images/ui/button/button-brown.png'

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [cartCount] = useState(0) // TODO: Replace with actual cart context
  const pathname = usePathname()

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b-2 border-pixel-pattern shadow-pixel">
      <nav className="w-full px-4 py-2">
        <div className="flex items-center">
          {/* Logo Area */}
          <Link href="/" className="text-2xl font-pixel text-primary hover:text-primary-focus transition-colors flex items-center gap-2">
            <Image src={lootmartIcon} alt="LootMart" width={48} height={48} priority />
            <span className="hidden sm:inline">LootMart</span>
          </Link>

          {/* Center Container for Search and Navigation */}
          <div className="flex-1 flex justify-center items-center">
            {/* Search Bar */}
            <div className={`w-[500px] mx-8 hidden md:block`}>
              <div className="relative">
                <input 
                  type="search"
                  placeholder="Search items..."
                  className="w-full px-4 py-2 bg-base-200 border-2 border-pixel-pattern rounded-pixel focus:outline-none focus:border-primary"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2">
                  🔍
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex h-full">
              <Link 
                href="/products" 
                className={`px-6 py-2 text-center transition-colors hover:scale-105 relative`}
                style={{
                  backgroundImage: pathname === '/products' ? `url(${buttonTile.src})` : 'none',
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  imageRendering: "pixelated"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundImage = `url(${buttonTile.src})`
                }}
                onMouseLeave={(e) => {
                  if (pathname !== '/products') {
                    e.currentTarget.style.backgroundImage = 'none'
                  }
                }}
              >
                Shop
              </Link>
              <Link 
                href="/categories" 
                className={`px-6 py-2 text-center transition-colors hover:scale-105 relative`}
                style={{
                  backgroundImage: pathname === '/categories' ? `url(${buttonTile.src})` : 'none',
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  imageRendering: "pixelated"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundImage = `url(${buttonTile.src})`
                }}
                onMouseLeave={(e) => {
                  if (pathname !== '/categories') {
                    e.currentTarget.style.backgroundImage = 'none'
                  }
                }}
              >
                Categories
              </Link>
              
              {/* Mobile Search Toggle */}
              <button 
                className={`md:hidden ${styles.navLink}`}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                🔍
              </button>

              {/* Cart with Counter */}
              <Link 
                href="/cart" 
                className={styles.navLink}
                data-active={pathname === '/cart'}
              >
                🛍️
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center border-2 border-background">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2 ml-4">
            <Link 
              href="/auth/login" 
              className={styles.authButton}
            >
              Login
            </Link>
            <Link 
              href="/auth/register" 
              className={styles.authButton}
            >
              Register
            </Link>
          </div>
        </div>

        {/* Mobile Search (Expandable) */}
        {isSearchOpen && (
          <div className="mt-2 md:hidden">
            <input 
              type="search"
              placeholder="Search items..."
              className="w-full px-4 py-2 bg-base-200 border-2 border-pixel-pattern rounded-pixel focus:outline-none focus:border-primary"
            />
          </div>
        )}
      </nav>
    </header>
  )
}
