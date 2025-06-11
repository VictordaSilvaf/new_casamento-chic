import Container from "@/components/Container";
import DescriptionSection from "@/components/DescriptionSection";
import TitleSection from "@/components/TitleSection";
import CardService from "./components/CardService";
import {
  Award,
  BarChart,
  BrushIcon,
  FileText,
  Heart,
  Send,
  Zap,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "EBOOK",
      description: "Cum sociis natoque penatibus et magnis dis massa.",
      icon: <FileText className="size-10 text-app-primary" />,
    },
    {
      title: "PLANILHA",
      description: "Cum sociis natoque penatibus et magnis dis massa.",
      icon: <BarChart className="size-10 text-app-primary" />,
    },
    {
      title: "LUA DE MEL",
      description: "Cum sociis natoque penatibus et magnis dis massa.",
      icon: <Heart className="size-10 text-app-primary" />,
    },
    {
      title: "8 ENCONTROS DE MENTORIA",
      description: "Cum sociis natoque penatibus et magnis dis massa.",
      icon: <Send className="size-10 text-app-primary" />,
    },
    {
      title: "12 ENCONTROS DE MENTORIA",
      description: "Cum sociis natoque penatibus et magnis dis massa.",
      icon: <Zap className="size-10 text-app-primary" />,
    },
    {
      title: "24 ENCONTROS DE MENTORIA",
      description: "Cum sociis natoque penatibus et magnis dis massa.",
      icon: <Award className="size-10 text-app-primary" />,
    },
  ];

  return (
    <div id="services">
      <Container>
        <TitleSection title="services" />
        <DescriptionSection>
          Todos os serviços que oferecemos especialmente para você.
        </DescriptionSection>

        <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-6">
          {services.map((service, index) => (
            <CardService
              key={index}
              title={service.title}
              description={service.description}
            >
              {service.icon}
            </CardService>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ServicesSection;
