import { PrismaService } from "src/prisma.service";
import { BadRequestException, Injectable } from "@nestjs/common";
@Injectable() 
export class UserService 
{
    constructor(
        private readonly prismaService : PrismaService
    ) {} 
    validateUser(email : string , password : string) 
    {
        try 
        {
            const user = this.prismaService.user.findFirst({
                where: {
                    email : email
                }
            })
            if (!user) return null 
            //Kiem tra password, kiem tra sau 
            return user 
        } 
        catch (err) {
            throw new BadRequestException("Internal Server Error") 
        }


    }
}