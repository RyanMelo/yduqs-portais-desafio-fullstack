import { Body, Controller, Post } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { CreateEnrollmentDto } from './create-enrollment.dto';
import { Enrollment } from '@prisma/client';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Matricula')
@Controller()
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Post('/enrollment')
  @ApiOperation({ summary: 'Criar uma matricula.' })
  @ApiBody({ type: CreateEnrollmentDto })
  @ApiResponse({ status: 201, description: 'Matricula criada com sucesso.' })
  @ApiResponse({
    status: 400,
    description:
      'Erro ao criar a matricula do lado do cliente. Isso se deve a algum campo inválido.',
    schema: {
      example: {
        message: [
          'O valor total da matricula é obrigatório.',
          'O valor total da matricula deve ser um número.',
          'A quantidade de parcelas é obrigatório.',
        ],
        error: 'Bad Request',
        statusCode: 400,
      },
    },
  })
  @ApiResponse({
    status: 409,
    description:
      'Já existe uma matricula cadastrada com e-mail ou CPF do usuário à ser cadastrado.',
    schema: {
      example: {
        message: ['Error ao salvar a matricula.'],
        error: 'Já existe uma matricula cadastrado com este e-mail ou CPF.',
        statusCode: 409,
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno do servidor.',
  })
  createEnrollment(
    @Body('enrollment') enrollment: CreateEnrollmentDto,
  ): Promise<Enrollment> {
    return this.enrollmentService.saveEnrollment(enrollment);
  }
}
