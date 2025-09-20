import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, Enrollment } from '@prisma/client';

@Injectable()
export class EnrollmentRepository {
  constructor(private prisma: PrismaService) {}

  async createEnrollment(
    data: Prisma.EnrollmentCreateInput,
  ): Promise<Enrollment> {
    return this.prisma.enrollment.create({
      data,
    });
  }

  async checkIfEnrollmentExists(email: string, documentNumber: string) {
    const existingEnrollment = await this.prisma.enrollment.findFirst({
      where: {
        OR: [{ email: email }, { documentNumber: documentNumber }],
      },
    });

    return !!existingEnrollment;
  }
}
