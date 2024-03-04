import { IsBoolean, IsNotEmpty, IsNumber, IsString, isString } from 'class-validator';

export class InsurerEntity {
    @IsString()
    _id?:string;
    
    @IsString()
    name:string;

    @IsNumber()
    description?:string;

    @IsString()
    logo:string;

}