import Link from 'next/link'

import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function CreateOrganization() {
  return (
    <div className="space-y-4 py-4">
      <Header />

      <main className="mx-auto w-full max-w-[1200px] space-y-4">
        <h1 className="text-2xl font-bold">Create organization</h1>

        <form className="space-y-4">
          {/* {success === false && message && (
            <Alert variant="destructive">
              <AlertTriangle className="size-4" />

              <AlertTitle>Sign in failed!</AlertTitle>

              <AlertDescription>
                <p>{message}</p>
              </AlertDescription>
            </Alert>
          )} */}

          <div className="space-y-1">
            <Label htmlFor="email">E-mail</Label>
            <Input name="email" type="email" id="email" />

            {/* {errors?.email && (
              <p className="text-xs font-medium text-red-500 dark:text-red-400">
                {errors.email[0]}
              </p>
            )} */}
          </div>

          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input name="password" type="password" id="password" />

            {/* {errors?.password && (
              <p className="text-xs font-medium text-red-500 dark:text-red-400">
                {errors.password[0]}
              </p>
            )} */}

            <Link
              href="/auth/forgot-password"
              className="text-xs font-medium text-foreground hover:underline"
            >
              Forgot your password?
            </Link>
          </div>

          <Button type="submit" className="w-full">
            Save organization
          </Button>

          <Button variant="link" className="w-full" size="sm" asChild>
            <Link href="/auth/sign-up">Create new account</Link>
          </Button>
        </form>
      </main>
    </div>
  )
}
