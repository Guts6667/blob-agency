import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import TeamCard from "../../Components/TeamCard";
import "./About.scss"

const About = () => {
    const [teamDatas, setTeamDatas] = useState([])
useEffect(() => {
fetch("/data/team.json")
.then((res) => res.json())
.then((res) => setTeamDatas(res));

}, [])

    return(
        <section className="container container__about" id="about">
            <h2>About <strong>BLOB</strong> Agency</h2>
            <div className="container__values">
                <h3>BLOB's values</h3>
                <p>BLOB Agency aims to create <strong>websites</strong> and <strong>sorftwares</strong> in the most <strong>responsible</strong> way. Even if it remains a work of daily questioning, we strive to integrate questions of <strong>energy</strong> and accessibility at the heart of our creative processes. From the creation of the model to the development of our projects. When it comes to our clients, we make it a point of honor to establish healthy, trusting and transparent relationships. From the moment we decide to work with you, your success becomes our priority. We are not aiming for the "industrialization" of our project but rather to be trusted partners to whom our loyal customers can turn.</p>
            </div>
            <div className="container__team">
                <h3>The Team</h3>
                {teamDatas && (
                    teamDatas.map((data) => {
                        return(
                            <TeamCard key={`${data.firstName}-${data.lastName}`} firstName={data.firstName} lastName={data.lastName} role = {data.role} description={data.description} picture={data.picture}  />
                        )
                    })
                )}
            </div>
        </section>
    )
}

export default About;