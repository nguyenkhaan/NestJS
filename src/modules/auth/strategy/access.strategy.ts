import { Injectable } from "@nestjs/common";
import TokenStrategy from "src/modules/auth/strategy/jwt.strategy";
import { Token } from "src/commons/enums/tokenKey";
@Injectable() 
export class AccessTokenStrategy extends TokenStrategy(Token.ACCESS) {} 