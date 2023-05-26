import { StatusCodes } from 'http-status-codes';
import { UserService } from './../../services/user.service';
import { Body, CurrentUser, Get, JsonController, Post, Res } from 'routing-controllers';
import { Service } from 'typedi';
import { sendResponse } from '../../utils/api.util';
import { Response } from 'express';
import { UserPayload } from '../../typings/auth';
import { RegisterDTO } from '../../validations/user.validation';

@Service()
@JsonController('/v1/users')
export class UserController {
    constructor(private readonly service: UserService) {}

    @Get('/profile')
    async getProfile(@Res() res: Response, @CurrentUser({ required: true }) user: UserPayload) {
        const { userId } = user;
        const profile = await this.service.getProfile(userId);
        return sendResponse(res, {
            message: 'Success getting user profile',
            data: { profile }
        });
    }

    @Post('/officer')
    async createOfficer(
        @Res() res: Response,
        @CurrentUser({ required: true }) { userId }: UserPayload,
        @Body() dto: RegisterDTO
    ) {
        await this.service.createOfficer(dto, userId);

        return sendResponse(res, {
            statusCode: StatusCodes.CREATED,
            message: 'Successfully registered new officer'
        });
    }
}
