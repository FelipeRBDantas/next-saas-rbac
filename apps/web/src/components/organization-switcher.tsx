import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { ChevronsUpDown, PlusCircle } from 'lucide-react'
import Link from 'next/link'

import { getOrganizations } from '@/http/services/get-organizations'

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
  const { organizations } = await getOrganizations()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 w-[168px] rounded p-1 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer">
        <div className="text-muted-foreground">Select organization</div>

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
          <Link href="/create-organization" className="cursor-pointer">
            <PlusCircle className="mr-2 size-4" />
            Create new
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
