import type { FC } from "react";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    text: string;
}

const Title: FC<TitleProps> = ({ text, ...rest }) => {
    return (
        <h3 className="text-left leading-7 text-3xl uppercase" {...rest}>
            {text}
        </h3>
    )
}

export default Title;