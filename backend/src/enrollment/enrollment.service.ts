import { BadRequestException, Injectable } from '@nestjs/common';
import { EnrollmentRepository } from './enrollment.repository';
import { CreateEnrollmentDto } from './create-enrollment.dto';
import { Enrollment } from '@prisma/client';

@Injectable()
export class EnrollmentService {
  constructor(private readonly enrollmentRepository: EnrollmentRepository) {}

  async saveEnrollment(enrollment: CreateEnrollmentDto): Promise<Enrollment> {
    const enrollmentExist =
      await this.enrollmentRepository.checkIfEnrollmentExists(
        enrollment.email,
        enrollment.documentNumber,
      );

    if (enrollmentExist) {
      throw new BadRequestException('Error ao salvar a matricula.', {
        cause: new Error(),
        description:
          'Já existe uma matricula cadastrado com este e-mail ou CPF.',
      });
    }

    return this.enrollmentRepository.createEnrollment({
      ...enrollment,
      birthdate: new Date(enrollment.birthdate),
    });
  }
}
