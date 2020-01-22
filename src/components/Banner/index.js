import React from "react";
import banner from '../../assets/banner.png';
import './Banner.css';

export default function Banner() {
  return (
    <div id="banner">
      <img className="image" alt="kid" src={banner}/>
    </div>
  );
}