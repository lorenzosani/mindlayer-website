import { useState } from "react";

export const Button = ({ onClick, color, children, width }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        padding: "12px 10px 10px 10px",
        background: color,
        color: "#f7f7f7",
        fontFamily: "Overpass, sens-serif",
        fontWeight: "bold",
        width: width ?? "160px",
        margin: "20px 10px",
        borderRadius: "7px",
        cursor: "pointer",
        zIndex: 200,
        opacity: hovered ? 1 : 0.8,
        boxShadow: "0 6px 30px -10px" + color
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
};
