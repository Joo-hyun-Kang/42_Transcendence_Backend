import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AccountRepository {
  constructor(private prisma: PrismaService) {}

  // 쿼리 작성
  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async updateUserProfile(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { data, where } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async updateUserState(userId: string, status: string): Promise<User> {
    const where = { userId: userId };
    const data = {
      status: status,
    };
    return this.prisma.user.update({
      where,
      data,
    });
  }
}