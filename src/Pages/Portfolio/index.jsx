import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PortfolioCard from "../../Components/PortfolioCard";
import "./Portfolio.scss"
/**
 * Section Portfolio
 * @returns {JSX} React Component
 */
const Portfolio = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch('/data/portfolio.json')
        .then((res) => res.json())
        .then((res) => setDatas(res));
        
    }, [])

    return(
        <section className="container container__portfolio" id="portfolio">
            <h2>Our Favourite <strong>Projects</strong></h2>
            <div className="container__portfolio-card">
                {datas && (
                    datas.map((data) => {
                        return(
                            <PortfolioCard key={`${data.index}-${data.title}`} title={data.title} description={data.description} picture={data.picture} link={data.link} position={data.position}  />
                        )
                        
                    })
                )}
            </div>
        </section>
    )
}

export default Portfolio;