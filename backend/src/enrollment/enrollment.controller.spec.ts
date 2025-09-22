import { EnrollmentService } from './enrollment.service';
import { Test } from '@nestjs/testing';
import { EnrollmentController } from './enrollment.controller';
import { CreateEnrollmentDto } from './create-enrollment.dto';
import { EnrollmentRepository } from './enrollment.repository';

describe('EnrollmentController', () => {
  let enrollmentController: EnrollmentController;
  let enrollmentService: EnrollmentService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [EnrollmentController],
      providers: [
        EnrollmentService,
        { provide: EnrollmentRepository, useValue: {} },
      ],
    }).compile();

    enrollmentController = moduleRef.get(EnrollmentController);
    enrollmentService = moduleRef.get(EnrollmentService);
  });

  it('/enrollment (POST) should be create new enrollment', async () => {
    const enrollmentMock: CreateEnrollmentDto = {
      name: 'Maria José',
      documentNumber: '45685887689',
      birthdate: '1995-10-20',
      email: 'mariajose@gmail.com',
      phone: '21999998888',
      highSchoolGraduation: 2013,
      terms: true,
      courseType: 'INPERSON',
      totalValue: 3059.11,
      numberOfInstallments: 12,
      whatsAppNotifications: true,
    };

    const resultMock = {
      id: 'df5fabc3-48e3-45c9-ad80-b9bcfafb44c2',
      name: 'Maria José',
      documentNumber: '45685887689',
      birthdate: new Date('1995-10-20'),
      email: 'mariajose@gmail.com',
      phone: '21999998888',
      highSchoolGraduation: 2013,
      terms: true,
      courseType: 'INPERSON' as const,
      totalValue: 3059.11,
      numberOfInstallments: 12,
      whatsAppNotifications: true,
    };

    jest
      .spyOn(enrollmentService, 'saveEnrollment')
      .mockImplementation(() => Promise.resolve(resultMock));

    expect(await enrollmentController.createEnrollment(enrollmentMock)).toBe(
      resultMock,
    );
  });
});
