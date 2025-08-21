import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RestaurantEntity } from './entities/restaurant.entity';
import { RestaurantCreateInput } from './inputs/restaurant-create.input';
import { RestaurantModel } from './models/restaurant.model';
import { RestaurantService } from './restaurant.service';

@Resolver(() => RestaurantEntity)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query(() => [RestaurantModel])
  restaurants(): Promise<RestaurantModel[]> {
    return this.restaurantService.getAll();
  }

  @Mutation(() => RestaurantModel)
  async createRestaurant(
    @Args('restaurantCreateInput') restaurantCreateInput: RestaurantCreateInput,
  ) {
    return await this.restaurantService.createRestaurant(restaurantCreateInput);
  }
}
