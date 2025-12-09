import { useState, useEffect } from "react";

interface TypewriterEffectProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
}

export const TypewriterEffect = ({
    words,
    typingSpeed = 150,
    deletingSpeed = 100,
    pauseDuration = 2000,
}: TypewriterEffectProps) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor effect
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink(!blink);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    useEffect(() => {
        if (index === words.length) return;

        if (subIndex === words[index].length + 1 && !isDeleting) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
            return;
        }

        if (subIndex === 0 && isDeleting) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(
            () => {
                setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
            },
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timeout);
    }, [subIndex, index, isDeleting, words, pauseDuration, typingSpeed, deletingSpeed]);

    return (
        <span className="inline-block">
            {words[index].substring(0, subIndex)}
            <span className={`inline-block w-[3px] h-[1em] ml-1 align-middle bg-primary ${blink ? "opacity-100" : "opacity-0"}`}></span>
        </span>
    );
};
