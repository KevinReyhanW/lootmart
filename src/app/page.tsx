import Image from "next/image";
import Link from "next/link";
import categories from "@/config/categories";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-purple-900 to-black text-white">
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-30"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to LootMart
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-200">
            Your One-Stop Shop for Epic Gaming Treasures
          </p>
          <Link
            href="/products"
            className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-lg font-semibold transition-colors"
          >
            Browse Collection
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Featured Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/products?category=${category.slug}`}
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Level Up Your Game?</h2>
          <p className="text-xl mb-8 text-purple-200">
            Join thousands of gamers who trust LootMart for their gaming essentials
          </p>
          <Link
            href="/auth/register"
            className="inline-block px-8 py-4 bg-white text-purple-900 hover:bg-gray-100 rounded-lg text-lg font-semibold transition-colors"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
