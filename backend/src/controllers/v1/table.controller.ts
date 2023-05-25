import { JsonController } from "routing-controllers";
import { Service } from "typedi";
import { tableService } from "../../services/table.service";

@Service()
@JsonController('/v1/merchant/table')
export class TableController{
    constructor(private readonly tableService: tableService) { }

    

}