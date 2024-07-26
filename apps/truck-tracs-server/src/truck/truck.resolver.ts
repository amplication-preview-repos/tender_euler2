import * as graphql from "@nestjs/graphql";
import { TruckResolverBase } from "./base/truck.resolver.base";
import { Truck } from "./base/Truck";
import { TruckService } from "./truck.service";

@graphql.Resolver(() => Truck)
export class TruckResolver extends TruckResolverBase {
  constructor(protected readonly service: TruckService) {
    super(service);
  }
}
