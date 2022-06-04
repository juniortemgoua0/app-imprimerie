import {IsBoolean, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateDocumentDto{

    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @IsNotEmpty()
    print_count: number

    @IsString()
    @IsNotEmpty()
    file: string

    @IsString()
    @IsNotEmpty()
    color: string

    @IsBoolean()
    status: boolean

}