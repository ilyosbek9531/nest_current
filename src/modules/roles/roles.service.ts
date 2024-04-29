import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationInterface } from 'src/common/interfaces';

@Injectable()
export class RolesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRoleDto: CreateRoleDto) {
    return this.prisma.roles.create({ data: createRoleDto });
  }

  findAll(query: PaginationInterface) {
    return this.prisma.roles.findMany({
      include: {
        permissions: true,
        users: true,
      },
      skip: query.skip,
      take: query.take,
      orderBy: {
        createdAt: 'asc',
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
