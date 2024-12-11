import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware({ ...routing, localePrefix: 'as-needed' })

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(de|en)/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
}
