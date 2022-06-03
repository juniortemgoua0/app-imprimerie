import {Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";


export type UserDocument = BonImpression & Document

@Schema()
export class BonImpression{

}

export const BonImpressionSchema = SchemaFactory.createForClass(BonImpression);