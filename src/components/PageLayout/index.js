import React from "react";
import './PageLayout.css';

export default function PageLayout(props) {
    return (
        <div>
            <h1 className="banner">
                {props.title}
            </h1>
            <div className="container">
                {props.children}
            </div>
        </div>
    );
}
