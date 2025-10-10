import { ChevronDown, LogOut } from 'lucide-react'
import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ProfileButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-3 outline-none cursor-pointer">
        <div className="flex flex-col items-end">
          <span className="text-sm font-medium">Felipe Dantas</span>
          <span className="text-xs text-muted-foreground">
            feliperbdantas@Outlook.com
          </span>
        </div>

        <Avatar>
          <AvatarImage
            src="https://github.com/feliperbdantas.png"
            alt="Felipe Dantas"
          />

          <AvatarFallback>FD</AvatarFallback>
        </Avatar>

        <ChevronDown className="size-4 text-muted-foreground" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href="/api/auth/sign-out">
            <LogOut className="mr-2 size-4" />
            Sign out
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
