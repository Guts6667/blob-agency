import React from "react";
import "./Expertise.scss"

const Expertise = () => {
    

    return(

        <section className="container container__expertise" id="expertise">
            <h2>THE EXPERTISE OF <strong>BLOB</strong></h2>
            <div className="container__expertise-card">
                <article className="box-expertise">
                    <h3>01</h3>
                    <h4>UI/UX DESIGN</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus minima consequatur, tenetur odio voluptatem eaque atque pariatur maiores? Vel velit incidunt aliquid impedit quaerat id voluptatum placeat doloribus asperiores aut?</p>
                </article>
                <article className="box-expertise">
                    <h3>02</h3>
                    <h4>WEBSITE CREATION</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nostrum nisi ullam, tenetur magnam repudiandae aut eligendi quaerat, nemo quae reiciendis natus. Nulla aliquid eligendi assumenda dolorum suscipit reprehenderit omnis.</p>
                </article>
                <article className="box-expertise">
                    <h3>03</h3>
                    <h4>APPLICATION DEVELOPMENT</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta harum veniam sunt aspernatur beatae vitae, dignissimos nemo reiciendis incidunt perferendis. Doloribus facere dolores harum accusamus hic necessitatibus et, quam perferendis!</p>
                </article>
            </div>
        </section>
    )
}

export default Expertise;