import { Injectable } from "@nestjs/common";
import { UserDTO } from "src/modules/dto/UserDTO";
import { PrismaService } from "src/prisma.service";

@Injectable() 
export class AuthService 
{
    //Tien hanh them cac guard de bao ve du lieu 
    constructor(private readonly prismaService : PrismaService) {} 
    async register(data : UserDTO) 
    {
        const user = await this.prismaService.user.create({
            data: {
                active: true, 
                email : data.email, 
                name : data.name, 
            }
        }) 
        return user //Tra ve nguoi dung vua tao 
    }
}