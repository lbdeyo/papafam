"use client";

import React from 'react';

export default function ShowreelVideo() {
    return (
        <div className="w-full pt-[3.8em] pb-8">
            <video
                className="w-full"
                controls
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/showreel-2025.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
