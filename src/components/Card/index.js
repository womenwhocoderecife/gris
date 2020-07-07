import React from "react";
import "./index.css";

export default function Card({ image, text, linkTo, textColor, width }) {
  return (
    <a href={linkTo} className="card">
      <img src={image} alt={text} title={text} style={{ width: width }} />
      <label style={{ color: textColor }}>{text}</label>
    </a>
  );
}
