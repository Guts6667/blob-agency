import React from "react";
import "./Expertise.scss"

/**
 * Section Expertise
 * @returns {JSX} React Component
 */
const Expertise = () => {
    
    return(

        <section className="container container__expertise" id="expertise">
            <h2>THE EXPERTISE OF <strong>BLOB</strong></h2>
            <div className="container__expertise-card">
                <article className="box-expertise">
                    <h3>01</h3>
                    <h4>UI/UX DESIGN</h4>
                    <p>Because your designs allow you to differentiate and express your personnal or brand identity, Alexiane Grieu, our UI/UX Designer creates design with a strong identity while integrating accessibility and user experience as her main concerns.</p>
                </article>
                <article className="box-expertise">
                    <h3>02</h3>
                    <h4>WEBSITE CREATION</h4>
                    <p>A site created by BLOB Agency is a responsive, accessible and SEO optimized site. We work like artisans taking care of every detail in order to achieve harmony between technical and aesthetic solutions.</p>
                </article>
                <article className="box-expertise">
                    <h3>03</h3>
                    <h4>APPLICATION DEVELOPMENT</h4>
                    <p>BLOB Agency supports the creation of your applications by putting security and solidity at the heart of our priorities. Do you want to create a back office or a social network? Do you have an idea for an application to solve a daily problem, on a personal or professional scale? We accompany you from the brainstorming phase to the creation of the final project as well as during the maintenance of the project once completed. We assure you that you will always have the same interlocutor who understands your vision and the stakes that go with it. BLOB Agency also works with a range of loyal partners allowing us to respond to all issues. We are lucky to count among our partners, senior developers who have worked in the biggest tech companies in the world as well as specialists in specific fields such as blockchain or video games.</p>
                </article>
            </div>
        </section>
    )
}

export default Expertise;