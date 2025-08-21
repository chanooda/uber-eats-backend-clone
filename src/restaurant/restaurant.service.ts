import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RestaurantEntity } from './entities/restaurant.entity';
import { RestaurantCreateInput } from './inputs/restaurant-create.input';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(RestaurantEntity)
    private readonly restaurantRepository: Repository<RestaurantEntity>,
  ) {}
  getAll(): Promise<RestaurantEntity[]> {
    return this.restaurantRepository.find();
  }
  createRestaurant(restaurantCreateInput: RestaurantCreateInput) {
    const newRestaurant = this.restaurantRepository.create(
      restaurantCreateInput,
    );
    return this.restaurantRepository.save(newRestaurant);
  }
}
