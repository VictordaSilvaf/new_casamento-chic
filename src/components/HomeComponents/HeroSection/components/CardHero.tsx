import type { FC, ReactNode } from "react";
import Subtitle from "../../../Subtitle";
import Text from "../../../Text";

interface CardHeroProps {
  children: ReactNode;
  title: string;
  description: string;
}

const CardHero: FC<CardHeroProps> = ({ children, title, description }) => {
  return (
    <div className="card w-full sm:w-1/3 ">
      <div className="flex items-center justify-center gap-3.5 mb-7">
        {children}
        <Subtitle text={title} />
      </div>

      <Text className="max-w-full sm:max-w-80 text-center mx-auto text-[#404040]/80 font-light" text={description} />
    </div>
  );
};

export default CardHero;
