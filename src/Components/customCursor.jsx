import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });         // Drawn cursor
  const mousePos = useRef({ x: 0, y: 0 });                           // Actual mouse
  const [hovered, setHovered] = useState(false);
  const requestRef = useRef(null);

  const speed = 0.08; // 0 = no movement, 1 = instant snap. Try 0.05 - 0.2 for good results.

  useEffect(() => {
    const moveCursor = (e) => {
      const offsetX = 10;
      const offsetY = 15;
      mousePos.current = { x: e.clientX + offsetX, y: e.clientY + offsetY };
    };

    const animate = () => {
      setPosition((prev) => {
        const dx = mousePos.current.x - prev.x;
        const dy = mousePos.current.y - prev.y;

        return {
          x: prev.x + dx * speed,
          y: prev.y + dy * speed,
        };
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    const handleHover = (e) => {
      setHovered(!!e.target.closest("button, a"));
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleHover, true);
    document.addEventListener("mouseleave", handleHover, true);

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleHover, true);
      document.removeEventListener("mouseleave", handleHover, true);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-[9999] pointer-events-none ${
        hovered ? "scale-150 opacity-70" : "scale-100 opacity-100"
      } transition-transform ease-out`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transitionDuration: '0s', // Prevent tailwind duration from interfering
      }}
    >
      <div className="w-2 h-2 bg-black rounded-full" />
    </div>
  );
};

export default CustomCursor;
