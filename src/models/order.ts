import type { CartItem } from './index'

export type OrderItem = CartItem

export interface Order {
  id: string
  items: OrderItem[]
  total: number
  customer: {
    name: string
    email: string
  }
  createdAt: string
}

export default Order
