'use client';

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

type TypewriterTextProps = {
    words: string[];
    className?: string;
    cursorStyle?: string;
    typeSpeed?: number;
    deleteSpeed?: number;
    delaySpeed?: number;
};

export default function TypewriterText({
    words,
    className,
    cursorStyle = '|',
    typeSpeed = 70,
    deleteSpeed = 50,
    delaySpeed = 1200,
}: TypewriterTextProps) {
    return (
        <span className={className}>
            <Typewriter
                words={words}
                loop={0}
                cursor
                cursorStyle={cursorStyle}
                typeSpeed={typeSpeed}
                deleteSpeed={deleteSpeed}
                delaySpeed={delaySpeed}
            />
        </span>
    );
}


