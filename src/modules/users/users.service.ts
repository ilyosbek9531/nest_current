import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationInterface } from 'src/common/interfaces';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.users.create({ data: createUserDto });
  }

  findAll(query: PaginationInterface) {
    return this.prisma.users.findMany({
      include: {
        roles: true,
      },
      skip: query.skip,
      take: query.take,
      orderBy: {
        createdAt: 'asc',
      },
    });
  }

  findOne(id: string) {
    return this.prisma.users.findUnique({ where: { id } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({ where: { id }, data: updateUserDto });
  }

  remove(id: string) {
    return this.prisma.users.delete({ where: { id } });
  }
}
