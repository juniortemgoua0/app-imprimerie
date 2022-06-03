import {Injectable} from '@nestjs/common';
import {SignInDto, SignUpDto} from "./dto";
import {InjectModel} from "@nestjs/mongoose";
import {ModelName} from "../helpers/model-name";
import {Model} from "mongoose";
import {UserDocument} from "../user/user.schema";
import {DocumentDocument} from "../document/document.schema";

@Injectable()
export class AuthService {

    constructor(
        @InjectModel(ModelName.USER) private userModel: Model<UserDocument>,
        @InjectModel(ModelName.DOCUMENT) private documentModel: Model<DocumentDocument>
    ) {
    }

    signUp(signUpDto: SignUpDto) {

    }

    signIn(signInDto: SignInDto) {

    }
}
