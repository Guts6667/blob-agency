import React from "react";
import "./TeamCard.scss";

const TeamCard = ({firstName, lastName, role, description, picture}) => {
console.log(firstName + lastName + role + description + picture);
    return(
        <article className="box-teamCard">
            <img src={`/assets/${picture}`} alt={`${firstName} ${lastName}`} />
            <h4>{`${firstName} ${lastName}`}</h4>
            <span><em>{role}</em></span>
            <p>{description}</p>
        </article>
    )
}

export default TeamCard;