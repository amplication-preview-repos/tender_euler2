/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Trip } from "./Trip";
import { TripCountArgs } from "./TripCountArgs";
import { TripFindManyArgs } from "./TripFindManyArgs";
import { TripFindUniqueArgs } from "./TripFindUniqueArgs";
import { CreateTripArgs } from "./CreateTripArgs";
import { UpdateTripArgs } from "./UpdateTripArgs";
import { DeleteTripArgs } from "./DeleteTripArgs";
import { Truck } from "../../truck/base/Truck";
import { Driver } from "../../driver/base/Driver";
import { Route } from "../../route/base/Route";
import { TripService } from "../trip.service";
@graphql.Resolver(() => Trip)
export class TripResolverBase {
  constructor(protected readonly service: TripService) {}

  async _tripsMeta(
    @graphql.Args() args: TripCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Trip])
  async trips(@graphql.Args() args: TripFindManyArgs): Promise<Trip[]> {
    return this.service.trips(args);
  }

  @graphql.Query(() => Trip, { nullable: true })
  async trip(@graphql.Args() args: TripFindUniqueArgs): Promise<Trip | null> {
    const result = await this.service.trip(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Trip)
  async createTrip(@graphql.Args() args: CreateTripArgs): Promise<Trip> {
    return await this.service.createTrip({
      ...args,
      data: {
        ...args.data,

        truck: args.data.truck
          ? {
              connect: args.data.truck,
            }
          : undefined,

        driver: args.data.driver
          ? {
              connect: args.data.driver,
            }
          : undefined,

        route: args.data.route
          ? {
              connect: args.data.route,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Trip)
  async updateTrip(@graphql.Args() args: UpdateTripArgs): Promise<Trip | null> {
    try {
      return await this.service.updateTrip({
        ...args,
        data: {
          ...args.data,

          truck: args.data.truck
            ? {
                connect: args.data.truck,
              }
            : undefined,

          driver: args.data.driver
            ? {
                connect: args.data.driver,
              }
            : undefined,

          route: args.data.route
            ? {
                connect: args.data.route,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Trip)
  async deleteTrip(@graphql.Args() args: DeleteTripArgs): Promise<Trip | null> {
    try {
      return await this.service.deleteTrip(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Truck, {
    nullable: true,
    name: "truck",
  })
  async getTruck(@graphql.Parent() parent: Trip): Promise<Truck | null> {
    const result = await this.service.getTruck(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Driver, {
    nullable: true,
    name: "driver",
  })
  async getDriver(@graphql.Parent() parent: Trip): Promise<Driver | null> {
    const result = await this.service.getDriver(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Route, {
    nullable: true,
    name: "route",
  })
  async getRoute(@graphql.Parent() parent: Trip): Promise<Route | null> {
    const result = await this.service.getRoute(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
