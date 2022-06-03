import {Global, Module} from '@nestjs/common';
import {DocumentController} from './document.controller';
import {DocumentService} from './document.service';
import {MongooseModule} from "@nestjs/mongoose";
import {ModelName} from "../helpers/model-name";
import {DocumentSchema} from "./document.schema";

@Global()
@Module({
    imports: [
        MongooseModule.forFeature([
            {name: ModelName.DOCUMENT, schema: DocumentSchema}
        ])
    ],
    exports: [MongooseModule],
    controllers: [DocumentController],
    providers: [DocumentService]
})
export class DocumentModule {
}
