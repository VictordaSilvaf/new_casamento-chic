import type { FC, HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
}

const Text: FC<TextProps> = ({ text, className = '' }) => {
  return <p className={` text-[#404040] text-[15px] opacity-80 ${className}`}>{text}</p>;
};

export default Text;
