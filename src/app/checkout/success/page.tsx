import Link from 'next/link'

export default function SuccessPage() {
  return (
    <main className="container mx-auto px-4 py-20 mt-20 text-center">
      <div className="inline-block bg-white p-8 rounded-lg border-4 border-[#7a5c2d]">
        <h1 className="text-2xl font-bold text-[#5a3921] mb-4">Purchase Complete</h1>
        <p className="text-sm text-[#7a5c2d] mb-6">Thank you for your purchase! Your items will be delivered to your inventory shortly.</p>
        <Link href="/products" className="inline-block px-4 py-2 bg-[#5a3921] text-white rounded-sm">Return to Shop</Link>
      </div>
    </main>
  )
}
