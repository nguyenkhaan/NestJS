import { PrismaClient } from 'src/generated/prisma'
import { PrismaPg } from '@prisma/adapter-pg'
const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
  }),
})
async function main() 
{
    await prisma.role.createMany({
        data: [
            {
                id : 1810, 
                name: 'Admin'
            }, 
            {
                id: 1901, 
                name: 'User' 
            }
        ]
    })
    const admin = await prisma.user.create({
        data : {
            name: 'An', 
            email: 'nguyenkhaan2006@gmail.com', 
            active: true
        }
    })
    await prisma.userRole.create({
        data: {
            userId : admin.id, 
            roleId : 1810 //Admin 
        }
    })
}

main()
  .finally(async () => {
    await prisma.$disconnect()
  })
