import {Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";


export type DocumentDocument = DocumentM & Document

@Schema()
export class DocumentM{

}

export const DocumentSchema = SchemaFactory.createForClass(DocumentM);