"use client"

import { useRouter } from 'next/navigation'
import { useCart } from '@/context/cart-context'
import Button from '@/components/ui/buttons/Button'
import styles from '@/styles/components/Cart.module.css'

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart } = useCart()
  const router = useRouter()

  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0)

  if (items.length === 0) {
    return (
      <main className="container mx-auto px-4 py-8 mt-20">
        <div className={`${styles.cartEmpty} bg-white rounded-lg p-8 text-center border-4 border-[#7a5c2d]`}>
          <h2 className="text-2xl font-bold text-[#5a3921] mb-2">Your cart is empty</h2>
          <p className="text-sm text-[#7a5c2d] mb-4">Browse the armory and add items to your cart.</p>
          <Button href="/products" variant="tile">Browse Items</Button>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-2xl font-bold text-[#5a3921] mb-6">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center bg-white p-4 rounded-lg border-2 border-[#eee]">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
              <div className="ml-4 flex-1">
                <div className="font-bold text-[#5a3921]">{item.name}</div>
                <div className="text-sm text-[#7a5c2d]">${item.price.toFixed(2)}</div>
                <div className="mt-2 flex items-center space-x-2">
                  <input type="number" min={1} value={item.quantity} onChange={(e) => updateQuantity(item.id, Number(e.target.value))} className="w-20 p-1 border rounded text-[#5a3921] bg-white" />
                  <Button className="px-3 py-1" onClick={() => removeItem(item.id)}>Remove</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="bg-white rounded-lg p-6 border-4 border-[#7a5c2d]">
          <div className="text-sm text-[#7a5c2d]">Subtotal</div>
          <div className="text-2xl font-bold text-[#5a3921] mb-4">${subtotal.toFixed(2)}</div>
          <div className="space-y-2">
            <Button className="w-full" href="/checkout" variant="gradient">Proceed to Checkout</Button>
            <Button className="w-full" onClick={() => { clearCart(); router.push('/products') }} variant="tile">Clear Cart</Button>
          </div>
        </aside>
      </div>
    </main>
  )
}
