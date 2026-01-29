import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { Global } from "@nestjs/common";
@Global() //Cac Module khac khong can import PrismaModule van co the su dung duoc PrismaModule 
@Module({
    imports: [], 
    exports: [PrismaService], 
    providers: [PrismaService]
})
export class PrismaModule {} 