import { BadGatewayException, Injectable, InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import Strategy from 'passport-local'
import { AuthService } from "src/modules/auth/auth.service";
import { UserService } from "src/modules/user/user.service";

@Injectable() 
export class LocalStrategy extends PassportStrategy(Strategy) 
{
    constructor(private readonly authService : AuthService , private readonly userService : UserService) {
        super({
            usernameField : 'email'
        }) 
    } 
    async validate(email : string , password : string) //Thuong su dung cho login, Luc nay ben kia se gui email, password ve 
    {
        //Du lieu se duoc gan vao req.user, ben kia neu dung Guard thi tiep tuc 
        try 
        {
            const user = await this.userService.validateUser(email , password) 
            if (!user) 
                throw new UnauthorizedException("User has not been authorized") 
            return user //Ham nay tu dong gan vao req.user 
        }
        catch (err) 
        {
            throw new InternalServerErrorException("Internal Server Error")
        }
    }
}