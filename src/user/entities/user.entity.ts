import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { CommonEntity } from 'src/common/entities/common';
import { Column, Entity } from 'typeorm';

enum UserRole {
  Client,
  Owner,
  Delivery,
}

registerEnumType(UserRole, { name: 'userRole' });

@ObjectType('user')
@Entity('user')
export class UserEntity extends CommonEntity {
  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  password: string;

  @Column({ type: 'enum', enum: UserRole })
  @Field(() => UserRole)
  role: UserRole;
}
