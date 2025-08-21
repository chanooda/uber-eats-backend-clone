import { InputType, OmitType } from '@nestjs/graphql';
import { RestaurantModel } from '../models/restaurant.model';

@InputType()
export class RestaurantCreateInput extends OmitType(
  RestaurantModel,
  ['id'],
  InputType,
) {}
