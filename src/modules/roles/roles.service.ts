import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RolesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRoleDto: CreateRoleDto) {
    return this.prisma.roles.create({ data: createRoleDto });
  }

  findAll() {
    return this.prisma.roles.findMany({
      include: {
        permissions: true,
        users: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.roles.findUnique({ where: { id } });
  }

  update(id: string, updateRoleDto: UpdateRoleDto) {
    return this.prisma.roles.update({ where: { id }, data: updateRoleDto });
  }

  remove(id: string) {
    return this.prisma.roles.delete({ where: { id } });
  }
}
