import { EnrollmentService } from './enrollment.service';
import { Test } from '@nestjs/testing';
import { EnrollmentController } from './enrollment.controller';
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
});
