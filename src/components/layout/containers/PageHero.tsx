"use client"

import Link from 'next/link'
import buttonTile from '@/assets/images/ui/button/button-brown.png'

export default function PageHero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center">
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, rgba(90,57,33,0.05) 0%, rgba(122,92,45,0.04) 40%, rgba(240,216,176,0.06) 100%)'
      }} />

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-pixel text-[#5a3921] drop-shadow-lg">LootMart</h1>
        <p className="text-lg md:text-2xl mb-8 text-[#7a5c2d]">Your one-stop shop for epic gaming treasures</p>

        <div className="flex items-center justify-center space-x-4">
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 font-bold text-[#5a3921] rounded-sm shadow-md"
            style={{
              backgroundImage: `url(${buttonTile.src})`,
              backgroundSize: '100% 100%'
            }}
          >
            Browse Collection
          </Link>

          <Link
            href="/auth/register"
            className="inline-flex items-center px-6 py-3 font-bold text-white rounded-sm shadow-md"
            style={{
              background: 'linear-gradient(90deg,#5a3921,#7a5c2d)'
            }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  )
}
