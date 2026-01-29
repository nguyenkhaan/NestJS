import { Module } from "@nestjs/common";
import { UserService } from "src/modules/user/user.service";
@Module({
    imports: [], 
    exports: [UserService], 
    providers: [UserService], 
    controllers: []
}) 
export class UserModule { }