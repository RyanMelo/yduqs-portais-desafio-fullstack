import { Controller, Get } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';

@Controller()
export class EnrollmentController {
  constructor(private readonly appService: EnrollmentService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
