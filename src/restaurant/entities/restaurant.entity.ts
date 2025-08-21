import { IsBoolean, IsString, Length, MaxLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('restaurant')
export class RestaurantEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @Length(5, 10)
  name: string;

  @Column()
  @IsBoolean()
  isGood: boolean;

  @Column()
  @IsString()
  address: string;

  @Column()
  @IsString()
  @MaxLength(10)
  ownerName: string;
}
