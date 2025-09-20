import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateEnrollmentDto {
  @IsNumber({}, { message: 'O valor total da matricula deve ser um número.' })
  @IsNotEmpty({ message: 'O valor total da matricula é obrigatório.' })
  readonly totalValue: number;

  @IsNumber({}, { message: 'A quantidade de parcelas deve ser um número.' })
  @IsNotEmpty({ message: 'A quantidade de parcelas é obrigatório.' })
  readonly numberOfInstallments: number;

  @MinLength(3, { message: 'O nome deve ter no minimo 3 caracteres.' })
  @MaxLength(50, { message: 'O nome deve ter no maximo 50 caracteres.' })
  readonly name: string;

  @IsString({ message: 'O CPF deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo CPF é obrigatório.' })
  readonly documentNumber: string;

  @IsDate()
  readonly bithDate: string;

  @IsEmail({}, { message: 'E-mail invalido.' })
  @IsNotEmpty({ message: 'O campo E-mail é obrigatório.' })
  readonly email: string;

  @IsString({ message: 'O telefone deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo telefone é obrigatório.' })
  readonly phone: string;

  @IsNumber({}, { message: 'O ano de conclusão deve ser um número.' })
  @IsNotEmpty({ message: 'O campo Ano de Conclusão é obrigatório.' })
  highSchoolGraduation: number;

  @IsBoolean({ message: 'A aceitação dos termos deve ser um valor booleano.' })
  terms: boolean;

  @IsBoolean({
    message: 'O envio de notificações por WhatsApp ser um valor booleano.',
  })
  @IsOptional()
  whatsAppNotifications: boolean;
}
