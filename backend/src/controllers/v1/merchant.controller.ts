import { Service } from 'typedi';
import { sendResponse } from '../../utils/api.util';
import { Response } from 'express';
import { JsonController, Body, Req, Res, Delete, Post, Get, Put } from 'routing-controllers';
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

}