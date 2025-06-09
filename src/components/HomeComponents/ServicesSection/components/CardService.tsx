import Subtitle from "@/components/Subtitle";
import type { FC, ReactNode } from "react";

interface CardServiceProps {
  title: string;
  description: string;
  children: ReactNode;
}

const CardService: FC<CardServiceProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="p-6 bg-gray-100 rounded-md">
      <div className="size-24 mx-auto rounded-full bg-white flex items-center justify-center">
        {children}
      </div>

      <div className="mt-5">
        <Subtitle className="text-center" text={title} />
        <p className="text-center mt-5 text-app-typography-tertiary text-[15px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardService;
