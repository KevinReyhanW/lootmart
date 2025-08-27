import Image from "next/image";
import Link from "next/link";
import categories from "@/config/categories";
import PageContainer from '@/components/layout/containers/PageContainer'
import PageHero from '@/components/layout/containers/PageHero'
import Button from '@/components/ui/buttons/Button'

export default function Home() {
  return (
    <PageContainer>
      <PageHero />

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#5a3921]">
            Featured Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/products?category=${category.slug}`}
                className="group relative overflow-hidden rounded-lg aspect-square shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000cc] to-transparent z-10"></div>
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-transparent to-[#00000066]">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#5a3921]">Ready to Level Up Your Game?</h2>
          <p className="text-xl mb-8 text-[#7a5c2d]">
            Join thousands of gamers who trust LootMart for their gaming essentials
          </p>
          <Button href="/auth/register" className="px-8 py-4 text-[#5a3921]" variant="tile">
            Get Started Now
          </Button>
        </div>
      </section>
    </PageContainer>
  );
}
