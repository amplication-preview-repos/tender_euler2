/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { RouteService } from "../route.service";
import { RouteCreateInput } from "./RouteCreateInput";
import { Route } from "./Route";
import { RouteFindManyArgs } from "./RouteFindManyArgs";
import { RouteWhereUniqueInput } from "./RouteWhereUniqueInput";
import { RouteUpdateInput } from "./RouteUpdateInput";
import { TripFindManyArgs } from "../../trip/base/TripFindManyArgs";
import { Trip } from "../../trip/base/Trip";
import { TripWhereUniqueInput } from "../../trip/base/TripWhereUniqueInput";

export class RouteControllerBase {
  constructor(protected readonly service: RouteService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Route })
  async createRoute(@common.Body() data: RouteCreateInput): Promise<Route> {
    return await this.service.createRoute({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        routeId: true,
        startLocation: true,
        endLocation: true,
        distance: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Route] })
  @ApiNestedQuery(RouteFindManyArgs)
  async routes(@common.Req() request: Request): Promise<Route[]> {
    const args = plainToClass(RouteFindManyArgs, request.query);
    return this.service.routes({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        routeId: true,
        startLocation: true,
        endLocation: true,
        distance: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Route })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async route(
    @common.Param() params: RouteWhereUniqueInput
  ): Promise<Route | null> {
    const result = await this.service.route({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        routeId: true,
        startLocation: true,
        endLocation: true,
        distance: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Route })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRoute(
    @common.Param() params: RouteWhereUniqueInput,
    @common.Body() data: RouteUpdateInput
  ): Promise<Route | null> {
    try {
      return await this.service.updateRoute({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          routeId: true,
          startLocation: true,
          endLocation: true,
          distance: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Route })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRoute(
    @common.Param() params: RouteWhereUniqueInput
  ): Promise<Route | null> {
    try {
      return await this.service.deleteRoute({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          routeId: true,
          startLocation: true,
          endLocation: true,
          distance: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/trips")
  @ApiNestedQuery(TripFindManyArgs)
  async findTrips(
    @common.Req() request: Request,
    @common.Param() params: RouteWhereUniqueInput
  ): Promise<Trip[]> {
    const query = plainToClass(TripFindManyArgs, request.query);
    const results = await this.service.findTrips(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        tripId: true,
        departureTime: true,
        arrivalTime: true,

        truck: {
          select: {
            id: true,
          },
        },

        driver: {
          select: {
            id: true,
          },
        },

        route: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/trips")
  async connectTrips(
    @common.Param() params: RouteWhereUniqueInput,
    @common.Body() body: TripWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      trips: {
        connect: body,
      },
    };
    await this.service.updateRoute({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/trips")
  async updateTrips(
    @common.Param() params: RouteWhereUniqueInput,
    @common.Body() body: TripWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      trips: {
        set: body,
      },
    };
    await this.service.updateRoute({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/trips")
  async disconnectTrips(
    @common.Param() params: RouteWhereUniqueInput,
    @common.Body() body: TripWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      trips: {
        disconnect: body,
      },
    };
    await this.service.updateRoute({
      where: params,
      data,
      select: { id: true },
    });
  }
}
