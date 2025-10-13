import { Sun } from 'lucide-react'

import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

export function ThemeSwitcher() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="size-4" />

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem className="cursor-pointer">Light</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">Dark</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
