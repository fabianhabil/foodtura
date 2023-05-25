import { Body, JsonController, Post, Res } from "routing-controllers";
import { Service } from "typedi";
import { tableService } from "../../services/table.service";
import { tableDto } from "../../validations/table.validation";
import { sendResponse } from "../../utils/api.util";
import { Response } from "express";

@Service()
@JsonController('/v1/merchant/table')
export class TableController{
    constructor(private readonly tableService: tableService) { }

    @Post('/create')
    async create(@Res() res: Response, @Body() dto: tableDto){
        await this.tableService.create(dto);
        return sendResponse(res, {message: 'table successfully added!'});
    }

}