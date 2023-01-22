import React from "react";
import './PortfolioCard.scss'

/**
 * 
 * @param {String}
 * @returns {JSX} React Component
 */
const PortfolioCard = ({title, description, picture, link, position}) => {
    return(
        <article className={`box__portfolio ${position === "left" ? "box__portfolio-left" : "box__portfolio-right"}`}>
            <img src={`/assets/${picture}`} alt={title} />
            <div className="description">
                <h3>{title}</h3>
                <p>{description}</p>
                <button className="btn"><a href={link} target="_blank" rel="noopener noreferrer">Check it out!</a></button>
            </div>
        </article>
    )
}

export default PortfolioCard;