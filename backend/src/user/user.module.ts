import {Global, Module} from '@nestjs/common';
import {UserService} from './user.service';
import {UserController} from './user.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {UserSchema} from "./user.schema";
import {ModelName} from "../helpers/model-name";

@Global()
@Module({
    imports: [
        MongooseModule.forFeature([
            {name: ModelName.USER, schema: UserSchema}
        ])
    ],
    exports:[MongooseModule],
    providers: [UserService],
    controllers: [UserController]
})
export class UserModule {
}
