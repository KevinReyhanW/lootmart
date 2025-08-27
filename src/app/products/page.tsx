import ProductCard from '@/components/ui/cards/ProductCard/ProductCard'
import Button from '@/components/ui/buttons/Button'

const sampleProducts: {
  id: string
  name: string
  price: number
  image: string
  rarity?: 'common' | 'rare' | 'epic' | 'legendary'
}[] = [
  { id: 'p1', name: 'Sword of Dawn', price: 49.99, image: '/images/products/sword.jpg', rarity: 'epic' },
  { id: 'p2', name: 'Arcane Robe', price: 29.99, image: '/images/products/robe.jpg', rarity: 'rare' },
  { id: 'p3', name: 'Health Potion', price: 4.99, image: '/images/products/potion.jpg', rarity: 'common' }
]

export default function ProductsPage() {
  return (
    <main className="container mx-auto px-4 py-8 mt-20">
      {/* Gamified Hero */}
      <section className="mb-8 p-6 rounded-lg bg-gradient-to-r from-[#fff9f1] via-[#f7e1b8] to-[#f0d8b0] border-4 border-[#7a5c2d] shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#5a3921]">Armory</h1>
            <p className="text-sm text-[#7a5c2d]">Equip your character with powerful loot and upgrades.</p>
          </div>

          <div className="flex items-center space-x-3">
            <Button href="/products?sort=popular" variant="tile" className="px-4 py-2">Top Picks</Button>
            <Button href="/products?sort=new" variant="gradient" className="px-4 py-2">New</Button>
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Button variant="tile" className="px-3 py-2">All</Button>
            <Button variant="tile" className="px-3 py-2">Weapons</Button>
            <Button variant="tile" className="px-3 py-2">Armor</Button>
            <Button variant="tile" className="px-3 py-2">Consumables</Button>
          </div>

          <div className="text-sm text-[#7a5c2d]">Showing {sampleProducts.length} items</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  )
}
