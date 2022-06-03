import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {ModelName} from "../helpers/model-name";
import {Model} from "mongoose";
import {DocumentDocument} from "./document.schema";

@Injectable()
export class DocumentService {

    constructor(@InjectModel(ModelName.DOCUMENT) private documentModel:Model<DocumentDocument>) {
    }

}
