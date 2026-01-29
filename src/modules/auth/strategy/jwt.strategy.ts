//Ham dung de kiem tra token co hop le hay khong ? 
import { BadRequestException, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import Strategy from 'passport-jwt' 
import { Token } from "src/commons/enums/tokenKey";
import { JwtService } from "@nestjs/jwt";
import { ExtractJwt } from 'passport-jwt';
export default function TokenStrategy(token_type : Token)
{
    let secret_key = '' 
    if (token_type === Token.ACCESS) secret_key = process.env.ACCESS_SECRET_KEY as string 
    else if (token_type === Token.REFRESH) secret_key = process.env.REFRESH_SECRET_KEY as string 
    else if (token_type === Token.VERIFY) secret_key = process.env.VERIFY_SECRET_KEY as string 
    @Injectable() 
    class JwtStrategy extends PassportStrategy(Strategy , token_type) 
    {
        constructor(public jwtService :  JwtService) {
            super({
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey: secret_key
            })
        }
        //Gia tri token doc tu header se duoc truyen vao ham validate 
        async validate(token : string) 
        {
            try 
            {
                const tokenData = this.jwtService.verify(token , {secret : secret_key}) 
                return tokenData  //Du lieu tu dong duoc ghi vao req.user. Truong nay su dung cho cac truong khac ngoai register/login. Truong local.strategy.ts thi dung cho login 
                
            }
            catch (err) {
                throw new BadRequestException("Token is invalid") 
            }
        }
    }
    return JwtStrategy
}
