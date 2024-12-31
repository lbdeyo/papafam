"use client";

import {useEffect} from "react";

export default function ParallaxEffect() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      document.documentElement.style.setProperty(
        "--scroll",
        `${scrolled * 0.5}px`
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
