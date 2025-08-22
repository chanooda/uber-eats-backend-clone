import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput, CreateUserOutput } from './dtos/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => Boolean)
  hi() {
    return true;
  }

  @Mutation(() => CreateUserOutput)
  async signup(
    @Args('input') input: CreateUserInput,
  ): Promise<CreateUserOutput> {
    try {
      await this.userService.signup(input);
      return { success: true };
    } catch (e) {
      return { success: false, error: String(e) };
    }
  }
}
