import { getCookie } from 'cookies-next'
import ky, { type Input } from 'ky'

export const api = ky.create({
  prefixUrl: 'http://localhost:3333',
  hooks: {
    beforeRequest: [
      async (request) => {
        let token: string | undefined

        if (typeof window === 'undefined') {
          const { cookies: getServerCookies } = await import('next/headers')

          const cookieStore = await getServerCookies()

          const tokenValue = cookieStore.get('token')?.value

          token = tokenValue ?? undefined
        } else {
          const tokenValue = getCookie('token')

          token = typeof tokenValue === 'string' ? tokenValue : undefined
        }

        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`)
        }
      },
    ],
  },
  fetch: (input: Input, init?: RequestInit) => {
    const normalizedInput = input instanceof URL ? input.toString() : input

    return fetch(normalizedInput, init)
  },
})
