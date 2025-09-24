import { Box, Container } from "@mui/material";
import SecodaryHeader from "@/components/ui/SecodaryHeader";
import CardsSection from "@/components/CardsSection";
import Footer from "@/components/ui/Footer";

export default function Home() {
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
          title="Vamos começar, escolha as opções do seu curso"
          subtitle="Use os filtros para saber o preço do seu curso e fazer sua inscrição."
        />
        <Container>
          <CardsSection/>
        </Container>
      </main>

      <Footer/>
    </Box>
  );
}
