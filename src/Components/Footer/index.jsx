import React from "react";
import "./Footer.scss"

const Footer = () => {

    return(
        <footer className="container">
            <div className="infos-top">
            <span>Find us on: </span>
            <a href="https://www.linkedin.com/company/blob-agency/">
                <img src="/assets/Linkedin-Icon.svg" alt="Icon Linkedin" />
            </a>
            <a href="#contact">
                <img src="/assets/Instagram-Icon.svg" alt=" Icon Instagram" />
            </a>
            <a href="https://github.com/Guts6667">
                <img src="/assets/Github-Icon.svg" alt="Icon Github" />
            </a>
            </div>
            <span className="divider"></span>
            <span className="infos-bottom">chambet.dev@gmail.com</span>
        </footer>
    )
}

export default Footer;