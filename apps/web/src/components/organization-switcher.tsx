import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { ChevronsUpDown, PlusCircle } from 'lucide-react'
import Link from 'next/link'

import { getCurrentOrg } from '@/auth/auth'
import { getOrganizations } from '@/http/services/get-organizations'
import { isActiveRoute } from '@/utils/route'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from './ui/dropdown-menu'

export async function OrganizationSwitcher() {
  const currentOrg = await getCurrentOrg()

  const { organizations } = await getOrganizations()

  const currentOrganization = organizations.find(
    (org) => org.slug === currentOrg,
  )

  const isActiveRouteCreateOrganization = await isActiveRoute(
    '/create-organization',
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 w-[168px] rounded p-1 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer">
        {currentOrganization ? (
          <>
            <Avatar className="mr-2 size-4">
              {currentOrganization.avatarUrl && (
                <AvatarImage
                  src={currentOrganization.avatarUrl}
                  alt={currentOrganization.name ?? 'Organization photo picture'}
                />
              )}

              <AvatarFallback />
            </Avatar>

            <span className="truncate text-left">
              {currentOrganization.name}
            </span>
          </>
        ) : (
          <div className="text-muted-foreground">Select organization</div>
        )}

        <ChevronsUpDown className="ml-auto size-4 text-muted-foreground" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        alignOffset={-16}
        sideOffset={12}
        className="w-[200px]"
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel>Organizations</DropdownMenuLabel>

          {organizations.map((organization) => (
            <DropdownMenuItem key={organization.id} asChild>
              <Link
                href={`/org/${organization.slug}`}
                className="cursor-pointer"
              >
                <Avatar className="mr-2 size-4">
                  {organization.avatarUrl && (
                    <AvatarImage
                      src={organization.avatarUrl}
                      alt={organization.name ?? 'Organization photo picture'}
                    />
                  )}

                  <AvatarFallback />
                </Avatar>

                <span className="truncate">{organization.name}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link
            href="/create-organization"
            className={`cursor-pointer ${
              isActiveRouteCreateOrganization
                ? 'pointer-events-none opacity-50'
                : ''
            }`}
            aria-disabled={isActiveRouteCreateOrganization}
            tabIndex={isActiveRouteCreateOrganization ? -1 : 0}
          >
            <PlusCircle className="mr-2 size-4" />
            Create new
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
