import { type NextRequest } from 'next/server'
import { routes } from './config/navigation'

export function middleware(request: NextRequest) {
  // Add your authentication and route protection logic here
  // Example:
  // const token = request.cookies.get('token')
  // if (!token && request.nextUrl.pathname.startsWith('/checkout')) {
  //   return NextResponse.redirect(new URL(routes.auth.login, request.url))
  // }
}
