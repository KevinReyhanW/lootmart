import { useCallback, useEffect, useState } from 'react'
import type { Order } from '@/models/order'

const STORAGE_KEY = 'lootmart_orders'

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const raw = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
      return raw ? JSON.parse(raw) as Order[] : []
    } catch (e) {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(orders))
    } catch (e) {}
  }, [orders])

  const createOrder = useCallback((order: Order) => {
    setOrders((prev) => [order, ...prev])
  }, [])

  return { orders, createOrder }
}
