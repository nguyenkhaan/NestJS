import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { Module } from "@nestjs/common";
import { AccessTokenStrategy } from "src/modules/auth/strategy/access.strategy";
import { RefreshTokenStrategy } from "src/modules/auth/strategy/refresh.strategy";
import { AuthService } from "src/modules/auth/auth.service";
import { UserModule } from "src/modules/user/user.module";
import { ValidateExistsUser } from "src/commons/pipes/emailExists";

//Cac ham Strategy 
import { LocalStrategy } from "src/modules/auth/strategy/local.auth";
//Vi chi nhan vao cac class nen phai su dung nhu the nay 


@Module({
    imports: [JwtModule.register({}) , PassportModule , UserModule], 
    providers: [AccessTokenStrategy , RefreshTokenStrategy , AuthService , LocalStrategy , ValidateExistsUser],  
    controllers: [], 
    exports: [AccessTokenStrategy , RefreshTokenStrategy]
}) 
export class AuthModule {} 