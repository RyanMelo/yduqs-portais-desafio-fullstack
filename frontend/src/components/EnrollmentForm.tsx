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

const enrollmentSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  documentNumber: z.string().min(1, "CPF é obrigatório"),
  birthdate: z.string().min(1, "Data de nascimento é obrigatória"),
  email: z.email("E-mail inválido"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  highSchoolGraduation: z.number("O ano de término do ensino médio é obrigatório").min(1900).max(new Date().getFullYear()),
  terms: z.boolean().refine((val) => val === true, {
    message: "Você deve aceitar os termos e condições",
  }),
  whatsAppNotifications: z.boolean().optional(),
});

type EnrollmentFormData = z.infer<typeof enrollmentSchema>;

export default function EnrollmentForm() {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm<EnrollmentFormData>({
    resolver: zodResolver(enrollmentSchema),
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

  const onSubmit = (data: EnrollmentFormData) => {
    console.log(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: '24px',
        }}
      >
        <Controller
          name="name"
          control={control}
          render={({field}) => (
            <TextField
              {...field}
              label="Nome Completo"
              variant="outlined"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />
        <Controller
          name="documentNumber"
          control={control}
          render={({field}) => (
            <TextField
              {...field}
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
              label="Data de Nascimento"
              type="date"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
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
              label="Ano de conclusão do ensino médio"
              type="number"
              variant="outlined"
              fullWidth
              onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
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
                      }}
                    >
                      Li e concordo com os termos do edital, bem como com o tratamento dos meus dados para fins de
                      prospecção dos serviços educacionais prestados pela Estácio e demais instituições de ensino do
                      mesmo
                      Grupo Econômico, de acordo com a nossa política de privacidade.
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