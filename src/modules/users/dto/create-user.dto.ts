import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  first_name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  last_name: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Matches(/^[0-9]{9}$/, {
    message: 'Invalid phone number',
  })
  phone_number: string;

  @ApiProperty()
  @IsNotEmpty()
  hashed_password: string;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  role_id: string;

  @ApiProperty()
  @IsOptional()
  active: boolean;
}
