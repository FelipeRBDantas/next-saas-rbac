import { Slash } from 'lucide-react'
import Image from 'next/image'

import wolfIcon from '@/assets/wolf-icon.png'
import { ability } from '@/auth/auth'

import { OrganizationSwitcher } from './organization-switcher'
import { ProfileButton } from './profile-button'

export default async function Header() {
  const permissions = await ability()

  return (
    <div className="mx-auto max-w-[1200px] flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src={wolfIcon}
          alt="Logo Wolf Project"
          className="size-6 filter dark:invert dark:brightness-0 dark:contrast-100"
        />

        <Slash className="size-3 -rotate-[24deg] text-border" />

        <OrganizationSwitcher />

        {permissions?.can('get', 'Project') && (
          <h1 className="font-bold">Projects</h1>
        )}
      </div>

      <div className="flex items-center gap-4">
        <ProfileButton />
      </div>
    </div>
  )
}
