import React from "react";
import "./title.css";

export default function Title({ text, textColor }) {
  return (
    <h1 className="section-title" style={{ color: textColor }}>
      {text}
    </h1>
  );
}
