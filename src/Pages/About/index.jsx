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
        <section className="container container__about">
            <h2>About <strong>BLOB</strong> Agency</h2>
            <div className="container__values">
                <h3>BLOB's values</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi similique dolorem architecto vel quaerat ab nobis rerum? Deserunt labore ratione tempore pariatur earum, quod delectus quaerat reprehenderit. Dicta, ducimus cumque!</p>
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