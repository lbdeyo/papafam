'use client';

import React, { useEffect, useMemo, useState } from 'react';

type SimpleTypewriterProps = {
    words: string[];
    className?: string;
    cursor?: boolean;
    cursorStyle?: string;
    typeSpeedMs?: number;
    deleteSpeedMs?: number;
    delayBetweenWordsMs?: number;
};

export default function SimpleTypewriter({
    words,
    className,
    cursor = true,
    cursorStyle = '|',
    typeSpeedMs = 70,
    deleteSpeedMs = 50,
    delayBetweenWordsMs = 1000,
}: SimpleTypewriterProps) {
    const safeWords = useMemo(() => (Array.isArray(words) && words.length > 0 ? words : ['']), [words]);

    const [wordIndex, setWordIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const fullWord = safeWords[wordIndex % safeWords.length];
        const isWordComplete = displayed === fullWord;
        const isWordEmpty = displayed.length === 0;

        let nextDelay = isDeleting ? deleteSpeedMs : typeSpeedMs;

        if (!isDeleting && isWordComplete) {
            nextDelay = delayBetweenWordsMs;
            const timeoutId = setTimeout(() => setIsDeleting(true), nextDelay);
            return () => clearTimeout(timeoutId);
        }

        if (isDeleting && isWordEmpty) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % safeWords.length);
            return;
        }

        const timeoutId = setTimeout(() => {
            const nextText = isDeleting
                ? fullWord.substring(0, displayed.length - 1)
                : fullWord.substring(0, displayed.length + 1);
            setDisplayed(nextText);
        }, nextDelay);

        return () => clearTimeout(timeoutId);
    }, [displayed, isDeleting, wordIndex, safeWords, typeSpeedMs, deleteSpeedMs, delayBetweenWordsMs]);

    return (
        <span className={className}>
            {displayed}
            {cursor && <span className="ml-0.5 animate-pulse">{cursorStyle}</span>}
        </span>
    );
}


