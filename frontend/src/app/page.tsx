import { Container, Box } from "@mui/material";
import SecodaryHeader from "@/components/ui/SecodaryHeader";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <>
      <SecodaryHeader
        title="Vamos começar, escolha as opções do seu curso"
        subtitle="Use os filtros para saber o preço do seu curso e fazer sua inscrição."
      />

      <Container>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 8}}>
          <Card/>

          <Card/>
        </Box>
      </Container>
    </>
  );
}
