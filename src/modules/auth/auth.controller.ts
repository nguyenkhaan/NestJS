import { Controller } from "@nestjs/common";
import { UseGuards } from "@nestjs/common";
import { AuthService } from "src/modules/auth/auth.service";
import { Post , Body } from "@nestjs/common";
import { UserDTO } from "src/modules/dto/UserDTO";
import { LocalStrategy } from "src/modules/auth/strategy/local.auth";  //Dung de lam guard truoc khi du leu chay vao 
@Controller('auth') 
export class AuthController 
{
    constructor(private readonly authService : AuthService) {} 

    @Post('register') 
    async register(@Body() data : UserDTO) 
    {
        const responseData = await this.authService.register(data) 
        if (responseData) 
        {
            //Neu nguoi dung duoc tao thanh cong 
            return {
                success: true, 
                data : {email : responseData.email , name : responseData.name}
            }
        }
        return {
            success: false 
        }
    }

    @UseGuards(LocalStrategy)
    @Post('login') 
    login(@Body() data : any) 
    {

    }

}