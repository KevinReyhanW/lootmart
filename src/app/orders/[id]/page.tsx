"use client"

import { useParams, useRouter } from 'next/navigation'
import { useOrders } from '@/hooks/useOrders/useOrders'
import Link from 'next/link'

export default function OrderDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { orders } = useOrders()
  const order = orders.find((o) => o.id === params.id)

  if (!order) {
    return (
      <main className="container mx-auto px-4 py-8 mt-20 text-center">
        <p className="text-[#7a5c2d]">Order not found.</p>
        <div className="mt-4">
          <button onClick={() => router.back()} className="px-3 py-2 bg-[#5a3921] text-white rounded-sm">Go back</button>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-2xl font-bold text-[#5a3921] mb-4">Order {order.id}</h1>
      <div className="bg-white p-6 rounded-lg border-4 border-[#7a5c2d]">
        <div className="text-sm text-[#7a5c2d] mb-4">Placed on {new Date(order.createdAt).toLocaleString()}</div>
        <div className="space-y-3">
          {order.items.map((it) => (
            <div key={it.id} className="flex items-center justify-between">
              <div>{it.name} x{it.quantity}</div>
              <div>${(it.price * it.quantity).toFixed(2)}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-right font-bold text-[#5a3921]">Total ${order.total.toFixed(2)}</div>
      </div>
      <div className="mt-4">
        <Link href="/orders" className="px-3 py-2 bg-[#5a3921] text-white rounded-sm">Back to orders</Link>
      </div>
    </main>
  )
}
