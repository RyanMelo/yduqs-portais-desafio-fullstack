import { Injectable } from '@nestjs/common';
import { EnrollmentRepository } from './enrollment.repository';
import { CreateEnrollmentDto } from './create-enrollment.dto';
import { Enrollment } from '@prisma/client';

@Injectable()
export class EnrollmentService {
  constructor(private readonly enrollmentRepository: EnrollmentRepository) {}

  saveEnrollment(enrollment: CreateEnrollmentDto): Promise<Enrollment> {
    return this.enrollmentRepository.createEnrollment(enrollment);
  }
}
