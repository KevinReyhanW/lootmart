"use client"

import Link from 'next/link'
import { useOrders } from '@/hooks/useOrders/useOrders'

export default function OrdersPage() {
  const { orders } = useOrders()

  return (
    <main className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-2xl font-bold text-[#5a3921] mb-6">Your Orders</h1>
      {orders.length === 0 ? (
        <div className="bg-white p-8 rounded-lg border-4 border-[#7a5c2d] text-center">
          <p className="text-[#7a5c2d]">You have no orders yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((o) => (
            <Link key={o.id} href={`/orders/${o.id}`} className="block bg-white p-4 rounded-lg border-2 border-[#eee]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#5a3921]">Order {o.id}</div>
                  <div className="text-sm text-[#7a5c2d]">{new Date(o.createdAt).toLocaleString()}</div>
                </div>
                <div className="font-bold text-[#5a3921]">${o.total.toFixed(2)}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}
