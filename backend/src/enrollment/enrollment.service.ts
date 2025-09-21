import { ConflictException, Injectable } from '@nestjs/common';
import { EnrollmentRepository } from './enrollment.repository';
import { CreateEnrollmentDto } from './create-enrollment.dto';
import { Enrollment } from '@prisma/client';
import { Logger } from '@nestjs/common';

@Injectable()
export class EnrollmentService {
  constructor(private readonly enrollmentRepository: EnrollmentRepository) {}
  private readonly logger = new Logger(EnrollmentService.name);

  async saveEnrollment(enrollment: CreateEnrollmentDto): Promise<Enrollment> {
    this.logger.log('Iniciando processo de salvar matricula...');

    const enrollmentExist =
      await this.enrollmentRepository.checkIfEnrollmentExists(
        enrollment.email,
        enrollment.documentNumber,
      );

    if (enrollmentExist) {
      this.logger.warn(
        'Ja existe uma matricula cadastrado com e-mail ou CPF.',
        {
          email: enrollment.email,
          documentNumber: enrollment.documentNumber,
        },
      );

      throw new ConflictException(
        ['Já existe uma matricula cadastrado com este e-mail ou CPF.'],
        {
          cause: new Error(),
          description: 'Error ao cadastrar matricula.',
        },
      );
    }

    const newEnrollment = await this.enrollmentRepository.createEnrollment({
      ...enrollment,
      birthdate: new Date(enrollment.birthdate),
    });

    this.logger.log('Matricula salva com sucesso.', {
      id: newEnrollment.id,
    });

    return newEnrollment;
  }
}
