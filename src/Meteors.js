import React, { useEffect, useState } from "react";

export function Meteors({
  className = "",
  children,
  count = 20,
  angle = 215,
  color = "#64748b",
  tailColor = "#64748b",
}) {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: i * (100 / count),
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 7,
    }));
    setMeteors(generated);
  }, [count]);

  return (
    <div
      className={className}
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        background: "#0a0a0f",
        zIndex: 0,
      }}
    >
      <style>{`
        @keyframes meteor-fall {
          0% {
            transform: rotate(${angle}deg) translateX(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: rotate(${angle}deg) translateX(-100vmax);
            opacity: 0;
          }
        }
      `}</style>

      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          style={{
            position: "absolute",
            top: "-40px",
            left: `${meteor.left}%`,
            width: "2px",
            height: "2px",
            borderRadius: "50%",
            backgroundColor: color,
            animation: `meteor-fall ${meteor.duration}s linear infinite`,
            animationDelay: `${meteor.delay}s`,
          }}
        >
          <span
            style={{
              position: "absolute",
              left: "100%",
              top: "50%",
              transform: "translateY(-50%)",
              width: "50px",
              height: "1px",
              background: `linear-gradient(to right, ${tailColor}, transparent)`,
            }}
          />
        </span>
      ))}

      {children && (
        <div style={{ position: "relative", zIndex: 1, height: "100%", overflowY: "auto", scrollBehavior: "smooth" }}>
          {children}
        </div>
      )}
    </div>
  );
}

export default Meteors;