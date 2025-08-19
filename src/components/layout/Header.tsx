import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            LootMart
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/products">Products</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/auth/login">Login</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
