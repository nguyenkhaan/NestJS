import { PrismaService } from "src/prisma.service";

export class UserService 
{
    constructor(
        private readonly prismaService : PrismaService
    ) {} 
    createUser() {
        
    }
}