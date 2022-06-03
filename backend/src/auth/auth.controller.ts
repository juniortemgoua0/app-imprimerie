import {Controller, Request, Post, UseGuards, Body} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {LocalAuthGuard} from "../security/local-auth.guard";
import {AuthService} from "./auth.service";
import {SignInDto, SignUpDto} from "./dto";

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {
    }

    // @UseGuards(LocalAuthGuard)
    @Post("signin")
    signIn(@Body() signInDto: SignInDto) {
        return this.authService.signIn(signInDto);
    }


}
