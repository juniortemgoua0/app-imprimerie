import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {ModelName} from "../helpers/model-name";
import {Model} from "mongoose";
import {DocumentDocument} from "./document.schema";
import {ChangeDocumentStateDto, CreateDocumentDto, UpdateDocumentDto} from "./dto";
import {UserDocument} from "../user/user.schema";

@Injectable()
export class DocumentService {

    constructor(
        @InjectModel(ModelName.DOCUMENT) private documentModel: Model<DocumentDocument>,
        @InjectModel(ModelName.USER) private userModel: Model<UserDocument>
    ) {
    }

    findAllDocument() {
        return this.documentModel.find().populate(["user_id"]);
    }

    findOneDocument(idDocument: string) {
        return this.documentModel.findById(idDocument).populate(["user_id"])
    }

    async addDocument(idUser: string, createDocumentDto: CreateDocumentDto) {
        const createdDocument = {...createDocumentDto, user_id: idUser}
        const document = new this.documentModel(createdDocument);
        const newDocument = await document.save();

        await this.userModel.findByIdAndUpdate(idUser,
            {$push: {documents: newDocument}},
            {new: true, upsert: true}
        )

        return newDocument
    }

    updateDocument(idDocument: string, updateDocumentDto: UpdateDocumentDto) {
        return this.documentModel.findByIdAndUpdate(idDocument,
            {$set: {...updateDocumentDto}},
            {new: true, upsert: true}
        )
    }

    deleteDocument(idDocument: string) {
        return this.documentModel.findByIdAndDelete(idDocument);
    }

    updateDocumentState(idDocument: string, changeDocumentStateDto: ChangeDocumentStateDto) {
        return this.documentModel.findByIdAndUpdate(idDocument,
            {$set: {status: changeDocumentStateDto.status}}
        )
    }
}
