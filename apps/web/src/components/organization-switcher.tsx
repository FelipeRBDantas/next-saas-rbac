import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { ChevronsUpDown, PlusCircle } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from './ui/dropdown-menu'

export function OrganizationSwitcher() {
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

          <DropdownMenuItem>
            <Avatar className="mr-2 size-4">
              <AvatarImage
                src="https://github.com/rocketseat.png"
                alt="Rocketseat"
              />

              <AvatarFallback />
            </Avatar>

            <span className="truncate">Rocketseat</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <a href="/create-organization" className="cursor-pointer">
            <PlusCircle className="mr-2 size-4" />
            Create new
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
