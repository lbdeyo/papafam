import { useRef, useEffect } from "react";

const Spotlight = () => {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spot = spotRef.current;
    if (spot) {
      window.onpointermove = (event) => {
        const { clientX, clientY } = event;
        spot.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          {
            duration: 3000,
            fill: "forwards",
          }
        );
      };
    }
  }, [spotRef]);

  return <div id="spot" className="opacity-100" ref={spotRef}></div>;
};

export default Spotlight;
