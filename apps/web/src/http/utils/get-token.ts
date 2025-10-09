import { getCookie } from 'cookies-next'

export async function getToken(): Promise<string | undefined> {
  if (typeof window === 'undefined') {
    const { cookies } = await import('next/headers')

    const cookieStore = await cookies()

    return cookieStore.get('token')?.value ?? undefined
  }

  const tokenValue = getCookie('token')

  return typeof tokenValue === 'string' ? tokenValue : undefined
}
