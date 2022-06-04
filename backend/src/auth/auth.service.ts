import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {SignInDto, SignUpDto} from "./dto";
import {InjectModel} from "@nestjs/mongoose";
import {ModelName} from "../helpers/model-name";
import {Model} from "mongoose";
import {UserDocument} from "../user/user.schema";
import {DocumentDocument} from "../document/document.schema";
import {UserService} from "../user/user.service";

@Injectable()
export class AuthService {

    constructor(
        @InjectModel(ModelName.USER) private userModel: Model<UserDocument>,
        @InjectModel(ModelName.DOCUMENT) private documentModel: Model<DocumentDocument>,
        private userService: UserService
    ) {
    }

    signUp(signUpDto: SignUpDto) {

    }

    async signIn(signInDto: SignInDto) {
        const {email, password} = signInDto
        const user = await this.userModel.findOne({email});
        if (user && user.password === password) {
            return user;
        }
        throw new HttpException("email ou mot de passe incorrecte", HttpStatus.NOT_FOUND)
    }
}
