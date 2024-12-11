import { redirect } from '@/i18n/routing'
import { getLocale } from 'next-intl/server'

export default async function Default() {
  let locale = await getLocale()
  redirect({ href: '/profile-list', locale })
}
