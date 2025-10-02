import ky, { type Input } from 'ky'

export const api = ky.create({
  prefixUrl: 'http://localhost:3333',
  fetch: (input: Input, init?: RequestInit) => {
    const normalizedInput = input instanceof URL ? input.toString() : input

    return fetch(normalizedInput, init)
  },
})
