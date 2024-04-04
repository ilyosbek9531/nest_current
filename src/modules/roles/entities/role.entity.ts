import { ApiProperty } from '@nestjs/swagger';
import { Roles } from '@prisma/client';

export class RoleEntity implements Roles {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
