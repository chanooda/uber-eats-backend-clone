import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { UserEntity } from '../entities/user.entity';

@InputType()
export class CreateUserInput extends PickType(
  UserEntity,
  ['email', 'password', 'role'],
  InputType,
) {}

@ObjectType()
export class CreateUserOutput {
  @Field({ nullable: true })
  error?: string;

  @Field()
  success: boolean;
}
