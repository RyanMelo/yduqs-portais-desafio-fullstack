import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EnrollmentRepository {
  constructor(private prisma: PrismaService) {}

  saveEnrollment() {
    return 'enrrollment saved';
  }
}
