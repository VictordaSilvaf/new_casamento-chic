import type { FC, ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

const Container:FC<ContainerProps> = ({children}) => {
    return (
        <div className="max-w-5xl w-full mx-auto  px-6 sm:px-0">
            { children }
        </div>
    )
}

export default Container; 