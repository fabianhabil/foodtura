import { Service } from 'typedi';
import { User, UserRole } from '../database/entities/user.entity';
import { Errors, ResponseError } from '../utils/api.util';
import { AuthService } from './auth.service';
import type { RegisterDTO } from '../validations/user.validation';
import { StatusCodes } from 'http-status-codes';

@Service()
export class UserService {
    constructor(private readonly authService: AuthService) {}

    async getProfile(userId: number): Promise<User | null> {
        const user = User.findOne({
            where: { userId },
            select: { password: false },
            relations: { merchant: true }
        });

        if (!user) {
            throw Errors.USER_NOT_FOUND;
        }

        return user;
    }

    async createOfficer(body: RegisterDTO, userId: number) {
        const foundUser = await User.findOneBy({ email: body.email });

        if (foundUser) {
            throw new ResponseError('This email is already registered', StatusCodes.CONFLICT);
        }

        const owner = await this.getProfile(userId);
        const user = User.create({ ...body, role: UserRole.OFFICER, merchantId: owner?.merchantId });

        user.password = await this.authService.hashPassword(user.password);
        await User.save(user);
    }

    async setMerchant(userId: number, merchantId: string) {
        const user = await User.findOneBy({ userId });

        if (user === null) {
            throw new ResponseError('User not found!', StatusCodes.NOT_FOUND);
        }

        user.merchantId = merchantId;

        await user.save();
    }
}
