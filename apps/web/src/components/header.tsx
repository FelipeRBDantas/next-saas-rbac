import Image from 'next/image'

import wolfIcon from '@/assets/wolf-icon.png'

import { ProfileButton } from './profile-button'

export default async function Header() {
  return (
    <div className="mx-auto max-w-[1200px] flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src={wolfIcon}
          alt="Logo Wolf Project"
          className="size-6 filter dark:invert dark:brightness-0 dark:contrast-100"
        />
      </div>

      <div className="flex items-center gap-4">
        <ProfileButton />
      </div>
    </div>
  )
}
