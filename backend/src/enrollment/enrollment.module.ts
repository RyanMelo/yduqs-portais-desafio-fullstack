import { Module } from '@nestjs/common';
import { EnrollmentController } from './enrollment.controller';
import { EnrollmentService } from './enrollment.service';
import { EnrollmentRepository } from './enrollment.repository';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [EnrollmentController],
  providers: [EnrollmentService, EnrollmentRepository, PrismaService],
})
export class EnrollmentModule {}
