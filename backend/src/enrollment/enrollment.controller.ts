import { Body, Controller, Post } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { CreateEnrollmentDto } from './create-enrollment.dto';
import { Enrollment } from '@prisma/client';

@Controller()
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Post('/enrollment')
  createEnrollment(
    @Body('enrollment') enrollment: CreateEnrollmentDto,
  ): Promise<Enrollment> {
    return this.enrollmentService.saveEnrollment(enrollment);
  }
}
