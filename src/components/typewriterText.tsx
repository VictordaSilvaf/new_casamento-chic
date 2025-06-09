import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TypewriterText({ text }) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        if (typeof text !== 'string') {
            setDisplayedText('');
            return;
        }

        let i = 0;
        setDisplayedText("");

        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prev) => prev + text[i - 1]);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [text]);


    return (
        <motion.h1
            className="text-4xl font-bold text-app-primary text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {displayedText ?? '...'}
        </motion.h1>
    );
}
