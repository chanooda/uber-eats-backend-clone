import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length, MaxLength } from 'class-validator';

@InputType()
export class RestaurantCreateInput {
  @Field(() => String)
  @IsString()
  @Length(5, 10)
  name: string;

  @Field(() => Boolean)
  @IsBoolean()
  isGood: boolean;

  @Field(() => String)
  @IsString()
  address: string;

  @Field(() => String)
  @IsString()
  @MaxLength(10)
  ownerName: string;
}
