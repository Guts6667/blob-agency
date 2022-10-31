import React from "react";
import FormContact from "../../Components/FormContact";
import "./Contact.scss"

const Contact = () => {

    return(
        <section className="container container__contact" id="contact">
            <div className="container__contact-form">
            <h2>Do you want to start a project?</h2>
            <p>Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum iudicavit, Quam ob rem cave Catoni anteponas ne istum quidem ipsum</p>
            <FormContact />
            </div>
            <img src="/assets/character-jumping.png" alt="3D Character Jumping" />
        </section>
    )
}
export default Contact;