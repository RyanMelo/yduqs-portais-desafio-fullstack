import { Module } from '@nestjs/common';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { LoggerModule } from 'pino-nestjs';

@Module({
  imports: [
    EnrollmentModule,
    LoggerModule.forRoot({
      pinoHttp: {
        name: 'YDUQS-Teste-API',
        level: process.env.NODE_ENV !== 'production' ? 'debug' : 'info',
        transport:
          process.env.NODE_ENV !== 'production'
            ? { target: 'pino-pretty' }
            : undefined,
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
