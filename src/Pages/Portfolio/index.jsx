import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PortfolioCard from "../../Components/PortfolioCard";
import "./Portfolio.scss"

const Portfolio = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch('/data/portfolio.json')
        .then((res) => res.json())
        .then((res) => setDatas(res));
        
    }, [])

    return(
        <section className="container container__portfolio">
            <h2>Our Favourite <strong>Projects</strong></h2>
            <div>
                {datas && (
                    datas.map((data) => {
                        return(
                            <PortfolioCard title={data.title} description={data.description} picture={data.picture} link={data.link} position={data.position}  key={data.index} />
                        )
                        
                    })
                )}
            </div>
        </section>
    )
}

export default Portfolio;