import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params: { locale },
  testpar,
}: {
  children: React.ReactNode
  testpar: React.ReactNode
  params: { locale: string }
}) {
  if (!routing.locales.includes(locale)) {
    notFound()
  }

  const messages = await getMessages()

  setRequestLocale(locale)

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
          {testpar}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
