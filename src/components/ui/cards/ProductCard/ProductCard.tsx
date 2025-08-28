"use client"

import Image from 'next/image'
import Button from '@/components/ui/buttons/Button'
import Modal from '@/components/ui/modals/Modal'
import React, { useState } from 'react'
import styles from '@/styles/components/ProductCard.module.css'

type Product = {
  id: string
  name: string
  price: number
  image: string
  rarity?: 'common' | 'rare' | 'epic' | 'legendary'
}

export default function ProductCard({ product }: { product: Product }) {
  const [isEquipped, setIsEquipped] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const rarityColor = {
    common: 'bg-gray-300 text-gray-800',
    rare: 'bg-blue-600 text-white',
    epic: 'bg-purple-700 text-white',
    legendary: 'bg-yellow-400 text-black'
  }[product.rarity ?? 'common']

  return (
    <>
      <div className={`relative bg-white rounded-lg overflow-hidden shadow-lg ${isEquipped ? styles.equipPulse : ''}`}>
      <div className="relative h-48 bg-gray-100">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-[#5a3921]">{product.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-[#7a5c2d]">${product.price.toFixed(2)}</span>
          <span className={`text-xs px-2 py-1 rounded ${rarityColor}`}>{product.rarity ?? 'common'}</span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <Button
            className="px-3 py-2 text-sm"
            variant="tile"
            onClick={() => {
              setIsEquipped(true)
              setTimeout(() => setIsEquipped(false), 800)
              setIsModalOpen(true)
            }}
          >
            Equip
          </Button>
          <Button className="px-3 py-2 text-sm" variant="gradient" onClick={() => setIsModalOpen(true)}>Add to Cart</Button>
        </div>
      </div>
      </div>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} title={`${product.name} Details`}>
        <p className="mb-2">You have interacted with <strong>{product.name}</strong>. Implement action here (equip/add to cart).</p>
        <div className="text-sm text-[#7a5c2d]">Rarity: {product.rarity}</div>
      </Modal>
    </>
  )
}
