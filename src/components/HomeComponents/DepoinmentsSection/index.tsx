import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Parallax } from "react-parallax";

const DepoinmentsSection = () => {
  return (
    <Parallax
      blur={0}
      bgImage="/src/assets/imagens/praia-casamento.jpg"
      bgImageAlt="Casamento"
      strength={700}
      className="w-full relative"
      bgImageStyle={{
        objectFit: "cover",
        filter: "brightness(0.3)",
      }}
    >
      <Container>
        <div
          id="depoiments"
          className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10"
        >
          <DepoimentCard />
          <DepoimentCard />
          <DepoimentCard />
          <DepoimentCard />
        </div>
        <div className="w-full flex justify-center items-center pb-10">
          <Button size="2xl" className="w-auto text-lg uppercase">
            Eu quero um casamento chique pagando pouco!
          </Button>
        </div>
      </Container>
    </Parallax>
  );
};

const DepoimentCard = () => {
  return (
    <a href="/">
      <div className="col-span-1 w-full bg-white overflow-hidden">
        <div className="w-full aspect-video relative">
          <img
            src="https://img.freepik.com/fotos-gratis/corredor-de-casamento-azul-e-branco-em-uma-praia-cercada-por-palmeiras-com-o-mar-ao-fundo_181624-32618.jpg?t=st=1748100226~exp=1748103826~hmac=902117c538bf625b327cc15db2e9faf6e446e74042a742245568a05df574b756&w=826"
            alt="Casamento"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-app-primary border-b-8 border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="https://i.pravatar.cc/40"
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-app-typography-tertiary">
                Maria e João
              </h3>
              <span className="text-xs text-app-typography-tertiary/75">
                Casamento em Setembro/2023
              </span>
            </div>
          </div>
          <p className="text-sm text-app-typography-tertiary/75 mb-4">
            "Foi um sonho realizado! Todo o planejamento e organização foram
            perfeitos. Recomendo muito!"
          </p>
          <div className="flex items-center gap-2 text-xs text-app-primary">
            <span>Ver depoimento completo</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
};

export default DepoinmentsSection;
