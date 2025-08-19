"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

// Import your tile images here:
import buttonTile from '@/assets/images/ui/button/button-brown.png' 

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [cartCount] = useState(0) // TODO: Replace with actual cart context

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b-2 border-pixel-pattern shadow-pixel">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <Link href="/" className="text-2xl font-pixel text-primary hover:text-primary-focus transition-colors flex items-center gap-2">
            <Image src="/images/ui/pixel-chest.svg" alt="LootMart" width={32} height={32} />
            <span className="hidden sm:inline">LootMart</span>
          </Link>

          {/* Search Bar */}
          <div className={`flex-1 max-w-md mx-8 hidden md:block`}>
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

          {/* Navigation & Actions */}
          <div className="flex items-center gap-6">
            <Link 
              href="/products" 
              className="hidden sm:block px-6 py-2 text-center transition-transform hover:scale-105"
              style={{
                backgroundImage: `url(${buttonTile.src})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                imageRendering: "pixelated"
              }}
            >
              Shop
            </Link>
            <Link 
              href="/categories" 
              className="hidden sm:block px-6 py-2 text-center transition-transform hover:scale-105"
              style={{
                backgroundImage: `url(${buttonTile.src})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                imageRendering: "pixelated"
              }}
            >
              Categories
            </Link>
            
            {/* Mobile Search Toggle */}
            <button 
              className="md:hidden px-4 py-2 text-center transition-transform hover:scale-105"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              style={{
                backgroundImage: `url(${buttonTile.src})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                imageRendering: "pixelated"
              }}
            >
              🔍
            </button>

            {/* Cart with Counter */}
            <Link 
              href="/cart" 
              className="relative px-4 py-2 text-center transition-transform hover:scale-105"
              style={{
                backgroundImage: `url(${buttonTile.src})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                imageRendering: "pixelated"
              }}
            >
              🛍️
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center border-2 border-background">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User Menu */}
            <div className="relative group">
              <Link 
                href="/auth/login" 
                className="px-4 py-2 text-center transition-transform hover:scale-105"
                style={{
                  backgroundImage: `url(${buttonTile.src})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  imageRendering: "pixelated"
                }}
              >
                👤
              </Link>
              <div className="absolute right-0 mt-2 w-48 bg-background border-2 border-pixel-pattern rounded-pixel shadow-pixel hidden group-hover:block">
                <div className="py-2 space-y-1">
                  <Link 
                    href="/auth/login" 
                    className="block mx-2 px-4 py-2 text-center transition-transform hover:scale-105"
                    style={{
                      backgroundImage: `url(${buttonTile.src})`,
                      backgroundSize: "100% 100%",
                      backgroundRepeat: "no-repeat",
                      imageRendering: "pixelated"
                    }}
                  >
                    Login
                  </Link>
                  <Link 
                    href="/auth/register" 
                    className="block mx-2 px-4 py-2 text-center transition-transform hover:scale-105"
                    style={{
                      backgroundImage: `url(${buttonTile.src})`,
                      backgroundSize: "100% 100%",
                      backgroundRepeat: "no-repeat",
                      imageRendering: "pixelated"
                    }}
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
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
