type Category = {
  name: string
  slug: string
  image: string
}

const categories: Category[] = [
  {
    name: 'Weapons & Gear',
    slug: 'weapons-gear',
    image: '/images/categories/weapons.jpg',
  },
  {
    name: 'Character Skins',
    slug: 'skins',
    image: '/images/categories/skins.jpg',
  },
  {
    name: 'Power-Ups',
    slug: 'power-ups',
    image: '/images/categories/powerups.jpg',
  },
]

export default categories;
