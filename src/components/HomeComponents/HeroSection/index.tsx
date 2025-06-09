import CardHero from "@/components/HomeComponents/HeroSection/components/CardHero";
import Container from "@/components/Container";
import DescriptionSection from "@/components/DescriptionSection";
import TitleSection from "@/components/TitleSection";
import { ChartNoAxesColumnIncreasing, Paperclip } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto flex flex-col items-center py-20 justify-center gap-2">
        <TitleSection title="CASAMENTO CHIC PAGANDO POUCO?" />
        <Container>
          <DescriptionSection>
            Te ensino a organizar um casamento chic, o casamento dos seus
            sonhos, gastando até 50% menos. Clique no botão “Eu vou casar”, que
            está abaixo e vamos juntas fazer o casamento mais incrível que você
            já viu.
          </DescriptionSection>
        </Container>
      </div>

      <Container>
        <div className="flex items-center flex-col sm:flex-row justify-center mt-12 gap-10 sm:gap-0 mb-20">
          <CardHero
            title="PLANEJAMENTO"
            description="Ajudamos você a planejar cada detalhe do seu casamento, desde a escolha do local até os mínimos detalhes da decoração."
          >
            <Paperclip className="text-app-primary size-5" />
          </CardHero>

          <CardHero
            title="ECONOMIA"
            description="Estratégias inteligentes para reduzir custos sem comprometer a qualidade e elegância do seu grande dia."
          >
            <ChartNoAxesColumnIncreasing className="text-app-primary size-5" />
          </CardHero>

          <CardHero
            title="ASSESSORIA"
            description="Suporte completo com fornecedores, negociações e organização para realizar o casamento dos seus sonhos."
          >
            <Paperclip className="text-app-primary size-5" />
          </CardHero>
        </div>
      </Container>
    </div>

    // <div>HeroSection</div>
  );
};

export default HeroSection;
