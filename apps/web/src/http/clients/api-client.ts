import { env } from '@saas/env'
import ky, { type Input } from 'ky'

import { getToken } from '@/http/utils/get-token'

export const api = ky.create({
  prefixUrl: env.NEXT_PUBLIC_API_URL,
  hooks: {
    beforeRequest: [
      async (request) => {
        const token = await getToken()

        if (token) request.headers.set('Authorization', `Bearer ${token}`)
      },
    ],
  },
  fetch: (input: Input, init?: RequestInit) => {
    const normalizedInput = input instanceof URL ? input.toString() : input

    return fetch(normalizedInput, init)
  },
})
