import { Slash } from 'lucide-react'
import Image from 'next/image'

import wolfIcon from '@/assets/wolf-icon.png'
import { ability } from '@/auth/auth'

import { OrganizationSwitcher } from './organization-switcher'
import { ProfileButton } from './profile-button'
import { ProjectSwitcher } from './project-switcher'
import { ThemeSwitcher } from './theme/theme-switcher'
import { Separator } from './ui/separator'

export default async function Header() {
  const permissions = await ability()

  return (
    <div className="mx-auto max-w-[1200px] flex items-center justify-between border-b pb-2">
      <div className="flex items-center gap-3">
        <Image
          src={wolfIcon}
          alt="Logo Wolf Project"
          className="size-6 dark:filter-none filter brightness-0 contrast-75"
        />

        <Slash className="size-3 -rotate-[24deg] text-border" />

        <OrganizationSwitcher />

        {permissions?.can('get', 'Project') && (
          <>
            <Slash className="size-3 -rotate-[24deg] text-border" />

            <ProjectSwitcher />
          </>
        )}
      </div>

      <div className="flex items-center gap-4">
        <ThemeSwitcher />

        <Separator orientation="vertical" className="h-5" />

        <ProfileButton />
      </div>
    </div>
  )
}
