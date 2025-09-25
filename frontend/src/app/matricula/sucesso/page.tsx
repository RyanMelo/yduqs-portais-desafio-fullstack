import { Box, Typography, Alert } from '@mui/material';
import SecodaryHeader from '@/components/ui/SecodaryHeader';
import Footer from '@/components/ui/Footer';

export default async function EnrollmentSuccessPage({searchParams}: {
  searchParams: Promise<{ [key: string]: string }>
}) {
  const { id } = await searchParams;

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <main style={{flex: 1}}>
        <SecodaryHeader
          title="Inscrição recebida com sucesso!"
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 'calc(100vh - 600px)',
            textAlign: 'center',
            padding: '20px',
          }}
        >
          <Alert severity="success" title="Inscrição recebida com sucesso!">
            {id && (
              <Typography variant="h6">
                Esse é o código da sua matrícula: <strong>{id}</strong>
              </Typography>
            )}
          </Alert>
        </Box>
      </main>

      <Footer/>
    </Box>
  );
}
