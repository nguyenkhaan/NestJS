//Kiem tra nguoi dung co ton tai khong 
import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
@Injectable() 
export class ValidateExistsUser implements PipeTransform
{
    transform(value: any, metadata: ArgumentMetadata) {
        //value la du lieu truyen vao 
        if (metadata.type === 'body') 
        {
            return value //Mot lat fix them du lieu 
        } 
        return value 
    }
}


//Pipe neu dung DI van phai import vao providers, noi module do su dung 