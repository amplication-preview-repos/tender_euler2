import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TruckService } from "./truck.service";
import { TruckControllerBase } from "./base/truck.controller.base";

@swagger.ApiTags("trucks")
@common.Controller("trucks")
export class TruckController extends TruckControllerBase {
  constructor(protected readonly service: TruckService) {
    super(service);
  }
}
