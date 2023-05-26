import { Service } from 'typedi';
import { sendResponse } from '../../utils/api.util';
import { Response } from 'express';
import { JsonController, Body, Res, Delete, Post, Get, Put, Param } from 'routing-controllers';
import { MerchantDTO, MerchantEditDTO } from '../../validations/merchant.validation';
import { MerchantService } from '../../services/merchant.service';

@Service()
@JsonController('/v1/merchant')
export class MerchantController {
    constructor(private readonly merchantService: MerchantService) {}

    @Post('/create')
    async create(@Res() res: Response, @Body() dto: MerchantDTO) {
        const user = await this.merchantService.create(dto);

        return sendResponse(res, { data: { user }, message: 'Merchant successfully added!' });
    }

    @Delete('/delete/:merchantId')
    async deleteMerchant(@Res() res: Response, @Param('merchantId') merchantId: string) {
        await this.merchantService.delete(merchantId);

        return sendResponse(res, { message: 'Merchant successfully deleted!' });
    }

    @Get('/get/:merchantId')
    async findMerchant(@Res() res: Response, @Param('merchantId') merchantId: string) {
        const merchant = await this.merchantService.get(merchantId);

        return sendResponse(res, {
            message: 'Merchant found!',
            data: { merchant }
        });
    }

    @Get('/')
    async getAllMerchant(@Res() res: Response) {
        const merchants = await this.merchantService.getAll();

        return sendResponse(res, {
            message: 'successfully found all merchant',
            data: { merchants }
        });
    }

    @Put('/edit/:merchantId')
    async editMerchant(@Res() res: Response, @Param('merchantId') merchantId: string, @Body() dto: MerchantEditDTO) {
        await this.merchantService.edit(merchantId, dto);

        return sendResponse(res, { message: 'Merchant successfully edited!' });
    }
}
