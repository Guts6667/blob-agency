import React from "react";
import { useState } from "react";
import "./Header.scss"

/**
 * Header
 * @returns {JSX} React Component
 */
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    function toggleBtn(){
        let navIcon = document.querySelector('.nav-icon');
        navIcon.classList.toggle('open')
        if (navIcon.classList.contains('open')) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }

    return(
        <header>
        <div className="nav-icon" onClick={toggleBtn}>
        <span></span>
        <span></span>
        <span></span>
    </div>
        <img src="/assets/LOGO-BLOB-Agency.png" alt="Logo BLOB Agency" />
        <nav className="nav-desktop">
            <a href="#home">Home</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#about">About</a>
            <a href="#expertise">Expertise</a>
            <a href="#contact">Contact</a>
        </nav>
        {isOpen && (
            <section className="section__burgerNav">
                <nav>
                    <a onClick={toggleBtn} href="#home">
                        <span>Home</span><img src="/assets/chevron-right-solid.svg" alt="Chevron right" />
                    </a>
                    <a onClick={toggleBtn} href="#portfolio" >
                        <span>Portfolio</span><img src="/assets/chevron-right-solid.svg" alt="Chevron right" />
                    </a>
                    <a onClick={toggleBtn} href="#about" >
                        <span>About</span><img src="/assets/chevron-right-solid.svg" alt="Chevron right" />
                    </a>
                    <a onClick={toggleBtn} href="#expertise">
                        <span>Expertise</span><img src="/assets/chevron-right-solid.svg" alt="Chevron right" />
                    </a>
                    <a onClick={toggleBtn} href="#contact">
                        <span>Contact</span><img src="/assets/chevron-right-solid.svg" alt="Chevron right" />
                    </a>
                </nav>
        </section>
        )}
        </header>
    )
}

export default Header;