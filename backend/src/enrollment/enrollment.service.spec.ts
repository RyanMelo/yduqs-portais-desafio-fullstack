import { Test, TestingModule } from '@nestjs/testing';
import { EnrollmentService } from './enrollment.service';
import { EnrollmentRepository } from './enrollment.repository';

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
});
