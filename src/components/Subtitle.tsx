import type { FC, HTMLAttributes } from "react";

interface SubtitleProps extends HTMLAttributes<HTMLParagraphElement> {
    text: string;
}

const Subtitle: FC<SubtitleProps> = ({ text, className = '' }) => {
    return (
        <h2 className={`text-lg font-bold text-black leading-4 uppercase ${className}`}>
            { text }
        </h2>
    )
}

export default Subtitle;