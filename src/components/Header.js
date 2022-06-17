import React from "react";
import globeIcon from "../img/icon-globe.svg"

export default function Header() {
    return (
        <header className="header">
            <img src={globeIcon} width="24px" height="24px" />
            <span className="header--text">my travel journal</span>
        </header>
    );
}