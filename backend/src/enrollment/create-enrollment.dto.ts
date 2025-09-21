import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export type CourseType = 'INPERSON' | 'DISTANCE';

export class CreateEnrollmentDto {
  @ApiProperty({
    example: 3059.19,
    required: false,
    description: 'Valor obrigatório caso o curso seja presencial.',
  })
  @IsNumber({}, { message: 'O valor total da matricula deve ser um número.' })
  @IsOptional()
  readonly totalValue: number;

  @ApiProperty({
    example: 12,
    required: false,
    description: 'Valor obrigatório caso o curso seja presencial.',
  })
  @IsNumber({}, { message: 'A quantidade de parcelas deve ser um número.' })
  @IsOptional()
  readonly numberOfInstallments: number;

  @ApiProperty({
    example: 'INPERSON',
    description: 'O valor deve ser INPERSON ou DISTANCE.',
    enum: ['INPERSON', 'DISTANCE'],
  })
  @IsEnum(['INPERSON', 'DISTANCE'], {
    message: 'O tipo do curso deve ser INPERSON ou DISTANCE.',
  })
  readonly courseType: CourseType;

  @ApiProperty({ example: 'Maria de Lurdes' })
  @MinLength(3, { message: 'O nome deve ter no minimo 3 caracteres.' })
  @MaxLength(50, { message: 'O nome deve ter no maximo 50 caracteres.' })
  readonly name: string;

  @ApiProperty({ example: '05959668365' })
  @IsString({ message: 'O CPF deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo CPF é obrigatório.' })
  @MinLength(11, { message: 'O CPF deve ter no minimo 11 caracteres.' })
  readonly documentNumber: string;

  @ApiProperty({ example: '1995-10-20' })
  @IsNotEmpty({ message: 'O campo Data de Nascimento é obrigatório.' })
  @IsDateString(
    {},
    {
      message:
        'A Data de Nascimento deve ser uma data válida no formato string.',
    },
  )
  readonly birthdate: string;

  @ApiProperty({ example: 'emailexemplo@gmail.com' })
  @IsEmail({}, { message: 'E-mail invalido.' })
  @IsNotEmpty({ message: 'O campo E-mail é obrigatório.' })
  readonly email: string;

  @ApiProperty({ example: '21999998888' })
  @IsString({ message: 'O telefone deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo telefone é obrigatório.' })
  @MinLength(11, {
    message: 'O telefone deve ter no minimo 11 caracteres, com o DDD.',
  })
  readonly phone: string;

  @ApiProperty({ example: 2013 })
  @IsNumber({}, { message: 'O ano de conclusão deve ser um número.' })
  @IsNotEmpty({ message: 'O campo Ano de Conclusão é obrigatório.' })
  highSchoolGraduation: number;

  @ApiProperty({ example: true })
  @IsBoolean({ message: 'A aceitação dos termos deve ser um valor booleano.' })
  terms: boolean;

  @ApiProperty({
    example: true,
    nullable: true,
    required: false,
    description: 'Campo opcional, podendo ser null.',
  })
  @IsBoolean({
    message: 'O envio de notificações por WhatsApp ser um valor booleano.',
  })
  @IsOptional()
  whatsAppNotifications: boolean;
}
