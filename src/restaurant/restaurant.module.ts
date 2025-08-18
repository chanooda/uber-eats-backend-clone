import { Module } from '@nestjs/common';
import { RestaurantResolver } from './resataurant.resolver';

@Module({
  providers: [RestaurantResolver],
})
export class RestaurantModule {}
