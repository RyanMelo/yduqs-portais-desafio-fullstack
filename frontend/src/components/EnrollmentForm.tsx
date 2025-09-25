"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import theme from "../theme";
import { useMaskito } from "@maskito/react";
import { cpfMask, dateMask, phoneMask, yearMask } from "@/utils/masks";
import {
  nameAnsLastNameValidation,
  birthdateValidation,
} from "@/utils/zodValidations";
import { isValidCPF } from "@/utils/valideDocumentNumber";
import { usePaymentSelectedStore } from "@/store/courseStore";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { createEnrollment } from "@/actions/enrollment";

const enrollmentSchema = z.object({
  name: nameAnsLastNameValidation,
  documentNumber: z.string().refine(isValidCPF, {message: "CPF inválido"}),
  birthdate: birthdateValidation,
  email: z.email("E-mail inválido"),
  phone: z.string("Telefone é obrigatório").min(16, "Telefone é inválido"),
  highSchoolGraduation: z
    .number("O ano de término do ensino médio é obrigatório")
    .min(1900, "Ano de conclusão inválido")
    .max(new Date().getFullYear(), "Ano de conclusão inválido"),
  terms: z.boolean().refine((val) => val === true, {
    message: "Você deve aceitar os termos e condições",
  }),
  whatsAppNotifications: z.boolean().optional(),
});

type EnrollmentFormData = z.infer<typeof enrollmentSchema>;

export default function EnrollmentForm() {
  const cpfInputRef = useMaskito({options: cpfMask});
  const dateInputRef = useMaskito({options: dateMask});
  const phoneInputRef = useMaskito({options: phoneMask});
  const yearInputRef = useMaskito({options: yearMask});

  const paymentOption = usePaymentSelectedStore((state) => state.paymentOption);

  useEffect(() => {
    console.log({paymentOption})
  }, [paymentOption])

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    reset: formReset,
  } = useForm<EnrollmentFormData>({
    resolver: zodResolver(enrollmentSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      documentNumber: "",
      birthdate: "",
      email: "",
      phone: "",
      highSchoolGraduation: undefined,
      terms: false,
      whatsAppNotifications: false,
    },
  });

  if (!paymentOption) {
    return redirect('/');
  }

  const onSubmit = async (data: EnrollmentFormData) => {
    try {
      const cleanedDocumentNumber = data.documentNumber.replace(/\D/g, '');
      const cleanedPhone = data.phone.replace(/\D/g, '');
      const formattedBirthdate = data.birthdate.split('/').reverse().join('-');

      const response = await createEnrollment({
        totalValue: paymentOption.totalValue,
        numberOfInstallments: paymentOption.numberOfInstallments,
        courseType: paymentOption.courseType,
        name: data.name,
        documentNumber: cleanedDocumentNumber,
        birthdate: formattedBirthdate,
        email: data.email,
        phone: cleanedPhone,
        highSchoolGraduation: data.highSchoolGraduation,
        terms: data.terms,
        whatsAppNotifications: data.whatsAppNotifications,
      })

      if (response.id) {
        redirect(`/enrollment/${response.id}`)
        formReset()
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          maxWidth: '660px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <Controller
          name="name"
          control={control}
          render={({field}) => (
            <Box>
              <TextField
                {...field}
                label="Nome Completo"
                variant="outlined"
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
              />

              {!errors.name?.message && (
                <Typography component="p" sx={{
                  fontSize: '12px',
                  lineHeight: '16px',
                  fontWeight: 400,
                  marginLeft: '16px',
                  marginTop: '4px'
                }}>
                  Preencha seu nome completo, sem abreviações, igual ao seu documento de identificação.{' '}
                  <Typography
                    component="a"
                    href="https://estacio.br/"
                    target="_blank"
                    sx={{
                      fontSize: '12px',
                      lineHeight: '16px',
                      fontWeight: 400,

                      textDecoration: 'underline',
                      color: 'text.primary'
                    }}
                  >
                    Confira o exemplo.
                  </Typography>
                </Typography>
              )}
            </Box>
          )}
        />

        <Controller
          name="documentNumber"
          control={control}
          render={({field}) => (
            <TextField
              {...field}
              ref={cpfInputRef}
              onInput={(e) =>
                field.onChange((e.target as HTMLInputElement).value)
              }
              label="CPF"
              variant="outlined"
              fullWidth
              error={!!errors.documentNumber}
              helperText={errors.documentNumber?.message}
            />
          )}
        />
        <Controller
          name="birthdate"
          control={control}
          render={({field}) => (
            <TextField
              {...field}
              ref={dateInputRef}
              onInput={(e) =>
                field.onChange((e.target as HTMLInputElement).value)
              }
              label="Data de Nascimento"
              type="text"
              variant="outlined"
              fullWidth
              error={!!errors.birthdate}
              helperText={errors.birthdate?.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({field}) => (
            <TextField
              {...field}
              label="E-mail"
              type="email"
              variant="outlined"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({field}) => (
            <TextField
              {...field}
              ref={phoneInputRef}
              onInput={(e) =>
                field.onChange((e.target as HTMLInputElement).value)
              }
              label="Telefone"
              type="tel"
              variant="outlined"
              fullWidth
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          )}
        />
        <Controller
          name="highSchoolGraduation"
          control={control}
          render={({field}) => (
            <TextField
              {...field}
              ref={yearInputRef}
              label="Ano de conclusão do ensino médio"
              type="text"
              variant="outlined"
              fullWidth
              onChange={(e) => field.onChange(Number(parseInt(e.target.value, 10)))}
              error={!!errors.highSchoolGraduation}
              helperText={errors.highSchoolGraduation?.message}
            />
          )}
        />

        <Box sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',

          [theme.breakpoints.down('md')]: {
            flexDirection: 'column-reverse',
          }
        })}>
          <Controller
            name="terms"
            control={control}
            render={({field}) => (
              <Box>
                <FormControlLabel
                  control={
                    <Checkbox
                      {...field}
                      checked={field.value}
                      sx={{
                        color: errors.terms ? 'error.main' : 'inherit',
                      }}
                    />
                  }
                  label={
                    <Typography
                      sx={{
                        fontSize: '16px',
                        fontWeight: 500,
                        lineHeight: 1.3,
                        color: errors.terms ? 'error.main' : 'inherit',
                        '& a': {
                          textDecoration: 'underline',
                          color: 'inherit',
                          '&:hover': {
                            opacity: 0.8,
                          }
                        }
                      }}
                    >
                      Li e concordo com os{' '}
                      <a
                        href="https://estacio.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        termos do edital
                      </a>
                      , bem como com o tratamento dos meus dados para fins de
                      prospecção dos serviços educacionais prestados pela Estácio e demais instituições de ensino do
                      mesmo{' '}
                      <a
                        href="https://estacio.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Grupo Econômico
                      </a>
                      , de acordo com a nossa{' '}
                      <a
                        href="https://estacio.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        política de privacidade
                      </a>
                      .
                    </Typography>
                  }
                />
                {errors.terms && (
                  <Typography
                    variant="body2"
                    color="error"
                    sx={{
                      marginTop: '4px',
                      marginLeft: '14px',
                      fontSize: '12px'
                    }}
                  >
                    {errors.terms.message}
                  </Typography>
                )}
              </Box>
            )}
          />

          <Controller
            name="whatsAppNotifications"
            control={control}
            render={({field}) => (
              <FormControlLabel
                control={<Checkbox {...field} checked={field.value}/>}
                label={
                  <Typography sx={{fontSize: '16px', fontWeight: 500, lineHeight: 1.3}}>
                    Aceito receber atualizações sobre minha inscrição pelo WhatsApp.
                  </Typography>
                }
              />
            )}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          color={isValid ? "primary" : "error"}
          disabled={!isValid}
          sx={{
            maxWidth: '110px',
            marginTop: '8px'
          }}
        >
          Avançar
        </Button>
      </Box>
    </ThemeProvider>
  );
}
