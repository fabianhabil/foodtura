import { Service } from 'typedi';
import { Merchant } from '../database/entities/merchant.entity';
import { Errors } from '../utils/api.util';
import type { MerchantDTO, MerchantEditDTO } from '../validations/merchant.validation';
import { UserService } from './user.service';
import { MerchantConfigService } from './config.service';

@Service()
export class MerchantService {
    constructor(private readonly userService: UserService, private readonly configService: MerchantConfigService) {}

    async create({ name, address, userId }: MerchantDTO) {
        const merchantUrl = name.split(' ').join('-').toLowerCase();
        const isMerchantUrlTaken = await Merchant.findOne({ where: { merchantUrl } });

        if (isMerchantUrlTaken) {
            throw Errors.MERCHANTURL_TAKEN;
        }

        const merchantConfigId = await this.configService.create();
        const merchant = Merchant.create({ name, address, merchantUrl, merchantConfigId });

        await Merchant.save(merchant);
        await this.userService.setMerchant(userId, merchant.merchantId);

        const user = await this.userService.getProfile(userId);
        return user;
    }

    async get(merchantId: string) {
        const merchant = await Merchant.findOne({ where: { merchantId }, relations: { config: true } });

        if (!merchant) {
            throw Errors.MERCHANT_NOT_FOUND;
        }

        console.log(merchant);

        return merchant;
    }

    async delete(merchantId: string) {
        const merchant = await this.get(merchantId);

        await Merchant.remove(merchant);
    }

    async edit(merchantId: string, { merchantUrl, name, address }: MerchantEditDTO) {
        const merchant = await this.get(merchantId);
        const isMerchantUrlTaken = await Merchant.findOneBy({ merchantUrl });

        if (isMerchantUrlTaken) {
            throw Errors.MERCHANTURL_TAKEN;
        }

        merchant.name = name;
        merchant.address = address;
        merchant.merchantUrl = merchantUrl;

        await merchant.save();
    }

    async getAll() {
        const merchant = await Merchant.find();

        return merchant;
    }
}
