import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { NextRequest } from 'next/server'

const intlMiddleware = createMiddleware({
  ...routing,
  localePrefix: 'as-needed',
})

export default function middleware(req: NextRequest) {
  return intlMiddleware(req)
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(de|en)/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
}
