import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";
import * as mongoose from "mongoose";
import {ModelName} from "../helpers/model-name";
import {User} from "../user/user.schema";


export type DocumentDocument = DocumentM & Document

@Schema({timestamps: true})
export class DocumentM {

    @Prop({required: true})
    name: string

    @Prop({required: true})
    print_count: number

    @Prop({required: true})
    file: string

    @Prop({required: true})
    color: string

    @Prop({required: true, default: false})
    status: boolean

    @Prop({type: mongoose.Schema.Types.ObjectId , ref:ModelName.USER})
    user_id: User
}

export const DocumentSchema = SchemaFactory.createForClass(DocumentM);