import { useState } from "react";
import HamburgerIcon from "../hamburger icon.png"

const NavBar = ({navLinks = []}) => {
    const [open, setOpen] = useState(false);
    const [darkTheme, setDarkTheme] = useState(false)

    const navItems = navLinks.map((link) =>(
        <li key={link.id}>
            <a href={link.href}>{link.label}</a>
        </li>
    ));

    return (
        <nav className={darkTheme ? "theme-dark" : ""}>
            <div id="img-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Burger_King_logo_%281999%E2%80%932020%29.svg/1186px-Burger_King_logo_%281999%E2%80%932020%29.svg.png" alt="B.K."/>
            </div>

            <button id="themeToggle" className="theme-toggle" onClick={() => setDarkTheme(!darkTheme)}>
                {darkTheme ? "☀️" : "🌙"}
            </button>

            <button id="menuToggle" className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation menu" aria-expanded={open}>
                <img id="menu" src={HamburgerIcon} alt="menu toggle icon"/>
            </button>

            <ul className={open ? "" : "toggleHidden"}>
                {navItems}
            </ul>
        </nav>
    );
};

export default NavBar;
