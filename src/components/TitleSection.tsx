import type { FC } from "react";

interface TitleSectionProps {
  title: string;
}

const TitleSection: FC<TitleSectionProps> = ({ title }) => {
  return (
    <div className="w-full relative pt-16" data-aos="zoom-in">
      <div className="-mt-[20px] hidden sm:block text-6xl leading-[72px] text-center w-full text-gray-100 absolute font-bold uppercase">{title}</div>
      <h2 className="relative text-[39px] font-bold w-full text-center left-0 -top-3 text-app-primary uppercase">{title}</h2>
    </div>
  );
};

export default TitleSection;
