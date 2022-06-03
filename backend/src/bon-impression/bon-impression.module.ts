import {Global, Module} from '@nestjs/common';
import {BonImpressionService} from './bon-impression.service';
import {BonImpressionController} from './bon-impression.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {ModelName} from "../helpers/model-name";
import {BonImpressionSchema} from "./bon-impression.schema";

@Global()
@Module({
    imports: [
        MongooseModule.forFeature([
            {name: ModelName.BON_IMPRESSION, schema: BonImpressionSchema}
        ])
    ],
    exports: [MongooseModule],
    providers: [BonImpressionService],
    controllers: [BonImpressionController]
})
export class BonImpressionModule {
}
