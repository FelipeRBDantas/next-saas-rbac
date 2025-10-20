import { headers } from 'next/headers'

export async function isActiveRoute(targetPath: string): Promise<boolean> {
  const headerList = await headers()

  const referer = headerList.get('referer') || ''

  try {
    const url = new URL(referer)

    const currentPath = url.pathname

    return currentPath === targetPath
  } catch {
    return false
  }
}
