import React from "react";
import './PortfolioCard.scss'

const PortfolioCard = ({title, description, picture, link, position}) => {
console.log(title);
    return(
        <article className={`box__portfolio ${position === "left" ? "box__portfolio-left" : "box__portfolio-right"}`}>
            <img src={`/assets/${picture}`} alt={title} />
            <div className="description">
                <h3>{title}</h3>
                <p>{description}</p>
                <button className="btn"><a href={link}>Check it out!</a></button>
            </div>
        </article>
    )
}

export default PortfolioCard;