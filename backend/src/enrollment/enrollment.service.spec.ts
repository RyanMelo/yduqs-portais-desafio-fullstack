import { Test, TestingModule } from '@nestjs/testing';
import { EnrollmentService } from './enrollment.service';
import { CreateEnrollmentDto } from './create-enrollment.dto';
import { EnrollmentRepository } from './enrollment.repository';
import { ConflictException } from '@nestjs/common';

const mockEnrollmentRepository = {
  createEnrollment: jest.fn(),
  checkIfEnrollmentExists: jest.fn(),
};

describe('EnrollmentService', () => {
  let enrollmentService: EnrollmentService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        EnrollmentService,
        {
          provide: EnrollmentRepository,
          useValue: mockEnrollmentRepository,
        },
      ],
    }).compile();

    enrollmentService = app.get<EnrollmentService>(EnrollmentService);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(enrollmentService).toBeDefined();
  });

  it('should be create enrollment with success', async () => {
    const enrollmentMock: CreateEnrollmentDto = {
      courseType: 'DISTANCE',
      name: 'Maria José',
      documentNumber: '45685887689',
      birthdate: '1995-10-20',
      email: 'mariajose@gmail.com',
      phone: '21999998888',
      highSchoolGraduation: 2013,
      terms: true,
      whatsAppNotifications: true,
    };

    mockEnrollmentRepository.createEnrollment.mockResolvedValue({
      id: 'df5fabc3-48e3-45c9-ad80-b9bcfafb44c2',
      ...enrollmentMock,
    });

    const result = await enrollmentService.saveEnrollment(enrollmentMock);

    expect(result.id).toBeDefined();
  });

  it('should be return conflict', async () => {
    const enrollmentMock: CreateEnrollmentDto = {
      courseType: 'DISTANCE',
      name: 'Maria José',
      documentNumber: '45685887689',
      birthdate: '1995-10-20',
      email: 'mariajose@gmail.com',
      phone: '21999998888',
      highSchoolGraduation: 2013,
      terms: true,
      whatsAppNotifications: true,
    };

    mockEnrollmentRepository.checkIfEnrollmentExists.mockResolvedValue(true);

    try {
      await enrollmentService.saveEnrollment(enrollmentMock);

      fail('Should have thrown a ConflictException');
    } catch (error) {
      expect(error).toBeInstanceOf(ConflictException);

      expect(error.response.error).toEqual('Error ao cadastrar matricula.');

      expect(error.response.message).toEqual([
        'Já existe uma matricula cadastrado com este e-mail ou CPF.',
      ]);
    }
  });
});
