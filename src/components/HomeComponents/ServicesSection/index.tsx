import Container from "@/components/Container";
import DescriptionSection from "@/components/DescriptionSection";
import TitleSection from "@/components/TitleSection";
import CardService from "./components/CardService";
import { BrushIcon } from "lucide-react";

const ServicesSection = () => {
  return (
    <div id="services">
      <Container>
        <TitleSection title="services" />
        <DescriptionSection>
          JUST CHECK OUT ALL OF THE SERVICE LISTS BELOW TO GET A GENERAL IDEA OF
          WHAT WE ARE CAPABLE OF DELIVERING.
        </DescriptionSection>

        <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-6">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <CardService
              key={index}
              title="CREATIVE DESIGN"
              description="Cum sociis natoque penatibus et magnis dis massa."
            >
              <BrushIcon className="size-10 text-app-primary" />
            </CardService>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ServicesSection;
