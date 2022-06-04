import {IsBoolean, IsNotEmpty} from "class-validator";

export class ChangeDocumentStateDto {

    @IsBoolean()
    @IsNotEmpty()
    status: boolean
}