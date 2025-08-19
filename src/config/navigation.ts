export const routes = {
  home: '/',
  products: '/products',
  cart: '/cart',
  checkout: '/checkout',
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
  },
} as const

export const navItems = [
  { label: 'Products', href: routes.products },
  { label: 'Cart', href: routes.cart },
]
