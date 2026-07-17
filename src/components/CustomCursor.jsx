import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
    };
  }, []);

  return (
    <div
      className="
        fixed
        w-8
        h-8
        rounded-full
        pointer-events-none
        z-[9999]
        bg-cyan-400/30
        backdrop-blur-xl
        border
        border-cyan-300/40
        shadow-[0_0_30px_rgba(34,211,238,0.8)]
        transition-transform
        duration-75
      "
      style={{
        left: position.x - 16,
        top: position.y - 16,
      }}
    />
  );
}