import { Container } from "@mui/material";
import SecodaryHeader from "@/components/ui/SecodaryHeader";
import CardsSection from "@/components/CardsSection";

export default function Home() {
  return (
    <>
      <SecodaryHeader
        title="Vamos começar, escolha as opções do seu curso"
        subtitle="Use os filtros para saber o preço do seu curso e fazer sua inscrição."
      />

      <Container>
        <CardsSection/>
      </Container>
    </>
  );
}
