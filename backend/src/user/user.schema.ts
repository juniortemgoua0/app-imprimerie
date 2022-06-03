import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

export type UserDocument = User & Document

@Schema({timestamps: true})
export class User {

    @Prop({required: true, default: ""})
    first_name: string;

    @Prop({required: true, default: ""})
    last_name: string;

    @Prop({required: true})
    email: string

    @Prop({required: true})
    password: string;

    @Prop({required: true})
    registration_number: string

    @Prop({required: true, default: 1})
    status: string


}

export const UserSchema = SchemaFactory.createForClass(User);