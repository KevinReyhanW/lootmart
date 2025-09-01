"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/context/cart-context'
import Button from '@/components/ui/buttons/Button'

export default function CheckoutPage() {
  const { items, clearCart } = useCart()
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const total = items.reduce((s, i) => s + i.price * i.quantity, 0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app you'd call an API here. We'll simulate success.
    clearCart()
    router.push('/checkout/success')
  }

  return (
    <main className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-2xl font-bold text-[#5a3921] mb-6">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <form className="md:col-span-2 bg-white p-6 rounded-lg border-4 border-[#7a5c2d]" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm text-[#7a5c2d] mb-1">Name</label>
            <input className="w-full border p-2 rounded" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-[#7a5c2d] mb-1">Email</label>
            <input type="email" className="w-full border p-2 rounded" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="mb-4 text-sm text-[#7a5c2d]">Payment is simulated for demo purposes.</div>
          <Button type="submit" variant="gradient">Pay ${total.toFixed(2)}</Button>
        </form>

        <aside className="bg-white p-6 rounded-lg border-4 border-[#7a5c2d]">
          <h3 className="font-bold text-[#5a3921] mb-2">Order Summary</h3>
          {items.map((i) => (
            <div key={i.id} className="flex items-center justify-between text-sm mb-2">
              <div>{i.name} x{i.quantity}</div>
              <div>${(i.price * i.quantity).toFixed(2)}</div>
            </div>
          ))}
          <div className="mt-4 text-lg font-bold text-[#5a3921]">Total ${total.toFixed(2)}</div>
        </aside>
      </div>
    </main>
  )
}
