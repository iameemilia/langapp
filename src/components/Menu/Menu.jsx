import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo_english.png";

// Стили для меню
const headerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "50px",
    backgroundColor: "#000",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};

const logoStyle = {
    height: "30px",
    marginRight: "10px",
};

const navStyle = {
    display: "flex",
    alignItems: "center",
};

const navLinkStyle = {
    marginRight: "10px",
};

// Компонент меню
export default function Menu() {
    return (
        <header style={headerStyle}>
            <div style={navStyle}>
                <Link to="/">
                    <img src={logo} style={logoStyle} alt="Логотип" />
                </Link>
                <Link to="/" activeStyle={navLinkStyle}>
                    Главная
                </Link>
                <Link to="/game" activeStyle={navLinkStyle}>
                    Карточки
                </Link>
            </div>
        </header>
    );
}
