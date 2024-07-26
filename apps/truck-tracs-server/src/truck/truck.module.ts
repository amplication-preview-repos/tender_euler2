import { Module } from "@nestjs/common";
import { TruckModuleBase } from "./base/truck.module.base";
import { TruckService } from "./truck.service";
import { TruckController } from "./truck.controller";
import { TruckResolver } from "./truck.resolver";

@Module({
  imports: [TruckModuleBase],
  controllers: [TruckController],
  providers: [TruckService, TruckResolver],
  exports: [TruckService],
})
export class TruckModule {}
