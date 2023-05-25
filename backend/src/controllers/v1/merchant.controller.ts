import { Service } from 'typedi';
import { sendResponse } from '../../utils/api.util';
import { Response, response } from 'express';
import { JsonController, Body, Req, Res, Delete, Post, Get, Put, Param } from 'routing-controllers';
import { MerchantDTO } from '../../validations/merchant.validation';
import { MerchantService } from '../../services/merchant.service';

@Service()
@JsonController('/v1/merchant')
export class MerchantController {

    constructor(private readonly merchantService: MerchantService) { }

    @Post('/create')
    async create(@Res() res: Response, @Body() dto: MerchantDTO) {
        await this.merchantService.create(dto);

        return sendResponse(res, { message: 'Merchant successfully added!' })
    }

    @Delete('/delete/:MerchantId')
    async deleteMerchant(@Res() res: Response, @Param('MerchantId') MerchantId: string){
        await this.merchantService.delete(MerchantId);

        return sendResponse(res, { message: 'Merchant successfully deleted!'});
    }

    @Get('/find/:MerchantId')
    async findMerchant(@Res() res: Response, @Param('MerchantId') MerchantId: string){
        const merchant = await this.merchantService.get(MerchantId);

        return sendResponse(res, {
            message: 'Merchant found!',
            data: { merchant }
        })
    }

    @Get('/')
    async getAllMerchant(@Res() res: Response){
        const merchants = await this.merchantService.getAll();

        return sendResponse(res, {
            message: 'successfully found all merchant',
            data: { merchants }
        })
    }

    @Put('/edit/:MerchantId')
    async editMerchant(@Res() res: Response, @Param('MerchantId') MerchantId: string, @Body() dto: MerchantDTO){
        await this.merchantService.edit(MerchantId, dto);

        return sendResponse(res, { message: "Merchant successfully edited!" });
    }
}