import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function seed() {
  await prisma.organization.deleteMany()

  await prisma.user.deleteMany()

  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john@acme.com',
      avatarUrl: 'https://github.com/diego3g.png',
      passwordHash: await hash('123456', 1),
    },
  })
}

seed().then(() => {
  console.log('🌱 Database has been seeded. 🌱')
})
