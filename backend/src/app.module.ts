import {Module} from '@nestjs/common';
import {DocumentModule} from './document/document.module';
import { UserModule } from './user/user.module';
import { BonImpressionModule } from './bon-impression/bon-impression.module';
import {ConfigModule} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        MongooseModule.forRoot(process.env.MONGO_DB_URI),
        DocumentModule,
        UserModule,
        BonImpressionModule,
        AuthModule
    ],
    exports: [MongooseModule]
})
export class AppModule {
}
