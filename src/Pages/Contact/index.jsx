import React from "react";
import FormContact from "../../Components/FormContact";
import "./Contact.scss"


/**
 * Contact Section
 * @returns {JSX} React Component
 */
const Contact = () => {

    return(
        <section className="container container__contact" id="contact">
            <div className="container__contact-form">
            <h2>Do you want to start a project?</h2>
            <p>Whether you want to discuss your project, find out about our rates, get a quote or simply get a first meeting to get to know each other. Do not hesitate! We will take time for you.</p>
            <FormContact />
            </div>
            <img src="/assets/character-jumping.png" alt="3D Character Jumping" />
        </section>
    )
}
export default Contact;