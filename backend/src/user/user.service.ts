import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {ModelName} from "../helpers/model-name";
import {Model} from "mongoose";
import {UserDocument} from "./user.schema";
import {CreateUserDto, UpdateUserDto} from "./dto";

@Injectable()
export class UserService {

    constructor(@InjectModel(ModelName.USER) private userModel: Model<UserDocument>) {
    }

    findAll() {
        return this.userModel.find().where({status: 1}).populate(["documents"]);
    }

    findUser(idUser: string) {
        return this.userModel.findById(idUser).where({status: 1}).populate(["documents"])
    }

    async createUser(createUserDto: CreateUserDto) {
        const {registration_number, email} = createUserDto
        const checkedUSer = (await this.userModel.findOne({registration_number})) ||
            (await this.userModel.findOne({email}))
        if (checkedUSer) {
            throw new HttpException("Matricule ou Email deja pris", HttpStatus.UNAUTHORIZED);
        }
        const newUser = new this.userModel(createUserDto);
        return newUser.save();
    }

    updateUser(idUser: string, updateUserDto: UpdateUserDto) {
        return (this.userModel.findByIdAndUpdate(idUser,
                {$set: {...updateUserDto}},
                {new: true, upsert: true})
        )
    }

    deleteUser(idUser: string) {
        return (this.userModel.findByIdAndUpdate(idUser,
                {$set: {status: 0}},
                {new: true, upsert: true})
        )
    }

    async findOne(email: string) {
        return this.userModel.findOne({email})
    }
}
