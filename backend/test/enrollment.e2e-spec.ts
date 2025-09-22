import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { EnrollmentModule } from '../src/enrollment/enrollment.module';
import { CreateEnrollmentDto } from '../src/enrollment/create-enrollment.dto';
import { PrismaService } from '../src/prisma.service';

const enrollmentTesteEmail = 'enrollmentTeste-e2e@emailteste.com';

describe('EnrollmentController (e2e)', () => {
  let app: INestApplication;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [EnrollmentModule],
      providers: [PrismaService],
    }).compile();

    prismaService = moduleFixture.get<PrismaService>(PrismaService);
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    try {
      await prismaService.enrollment.deleteMany({
        where: {
          email: enrollmentTesteEmail,
        },
      });
    } catch (error) {
      console.log('No enrollment found to delete, skipping cleanup');
    }
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ (POST) should be create a new enrollment', async () => {
    const payload: CreateEnrollmentDto = {
      name: 'Maria José',
      documentNumber: '45685887689',
      birthdate: '1995-10-20',
      email: enrollmentTesteEmail,
      phone: '21999998888',
      highSchoolGraduation: 2013,
      terms: true,
      courseType: 'INPERSON',
      totalValue: 3059.11,
      numberOfInstallments: 12,
      whatsAppNotifications: true,
    };

    const response = await request(app.getHttpServer())
      .post('/enrollment')
      .send(payload)
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name', payload.name);
    expect(response.body).toHaveProperty('email', payload.email);
  });
});
