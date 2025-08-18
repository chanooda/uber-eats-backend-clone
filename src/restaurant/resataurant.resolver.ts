import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RestaurantCreateInput } from './inputs/restaurant-create.input';
import { Restaurant } from './models/restaurant.model';

@Resolver()
export class RestaurantResolver {
  @Query(() => [Restaurant])
  restaurant(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    return [];
  }

  @Mutation(() => Boolean)
  createRestaurant(
    @Args('restaurantCreateInput')
    restaurantCreateInput: RestaurantCreateInput,
  ) {
    console.log(restaurantCreateInput);
    return true;
  }
}
