"use client";

import Image from "next/image";
import {useEffect, useState} from "react";

export default function BackgroundOrchid() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute top-0 right-0 w-full pointer-events-none hidden orchid:block">
      <div className="relative mx-auto max-w-screen-lg">
        <Image
          src="/orchid-bg.png"
          alt="Decorative orchid"
          width={500}
          height={900}
          className="absolute -right-16 top-8 animate-fade-in opacity-0"
          style={{
            animationDelay: "0.5s",
            animationFillMode: "forwards",
          }}
          priority
        />
      </div>
    </div>
  );
}
