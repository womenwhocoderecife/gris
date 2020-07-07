import React from "react";
import "./index.css";

export default function Title({ text, textColor }) {
  return (
    <h1 className="section-title" style={{ color: textColor }}>
      {text}
    </h1>
  );
}
