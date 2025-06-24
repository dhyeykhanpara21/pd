import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && typeof target.matches === 'function' && target.matches('a, button, [data-cursor="pointer"]')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-50 transition-all duration-300 ease-out ${
        isHovering ? 'scale-150' : 'scale-100'
      }`}
      style={{
        transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
      }}
    >
      <div className="w-4 h-4 bg-white rounded-full mix-blend-difference"></div>
    </div>
  );
}