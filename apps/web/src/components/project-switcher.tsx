'use client'

import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { useQuery } from '@tanstack/react-query'
import { ChevronsUpDown, PlusCircle } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import { getProjects } from '@/http/services/get-projects'

import { Avatar, AvatarFallback } from './ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from './ui/dropdown-menu'

export function ProjectSwitcher() {
  const { slug: orgSlug } = useParams<{ slug: string }>()

  const { data, isLoading } = useQuery({
    queryKey: [orgSlug, 'projects'],
    queryFn: () => getProjects(orgSlug),
    enabled: !!orgSlug,
  })

  console.log(data)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 w-[168px] rounded p-1 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer">
        {/* {currentOrganization ? (
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
        ) : ( */}
        <div className="text-muted-foreground">Select project</div>
        {/* )} */}

        <ChevronsUpDown className="ml-auto size-4 text-muted-foreground" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        alignOffset={-16}
        sideOffset={12}
        className="w-[200px]"
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel>Projects</DropdownMenuLabel>

          {/* {organizations.map((organization) => ( */}
          <DropdownMenuItem /* key={organization.id} */ asChild>
            <Link href={''} className="cursor-pointer">
              <Avatar className="mr-2 size-4">
                {/* {organization.avatarUrl && (
                  <AvatarImage
                    src={organization.avatarUrl}
                    alt={organization.name ?? 'Organization photo picture'}
                  />
                )} */}

                <AvatarFallback />
              </Avatar>

              <span className="truncate">Projeto Teste</span>
            </Link>
          </DropdownMenuItem>
          {/* ))} */}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href="" className="cursor-pointer">
            <PlusCircle className="mr-2 size-4" />
            Create new
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
