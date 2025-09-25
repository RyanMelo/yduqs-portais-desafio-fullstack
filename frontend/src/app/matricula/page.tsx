import SecodaryHeader from "@/components/ui/SecodaryHeader";
import { Box, Container } from "@mui/material";
import Footer from "@/components/ui/Footer";
import EnrollmentForm from "@/components/EnrollmentForm";

export default function Matricula() {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <main style={{ flex: 1 }}>
        <SecodaryHeader
          title="Queremos saber um pouco mais sobre você"
        />
        <Container>
          <EnrollmentForm />
        </Container>
      </main>

      <Footer/>
    </Box>
  )
}