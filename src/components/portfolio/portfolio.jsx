import React from "react";

import ItemPortfolio from "../itemPortfolio/itemPortfolio";

import "./Portfolio.css";

function Portfolio() {

    const projects = [
        {
            link: "https://play.google.com/store/apps/details?id=ete.lilaspe",
            image: "https://i.ibb.co/0yw8WdJ/lilaspe.png", 
            title: "Lilás PE",
        },

        {
            link: "https://app.vc/colabore_2021",
            image: "https://i.ibb.co/NT9MCT3/colabore.jpg", 
            title: "Colabore",

        },

        {
            link: "https://github.com/degu0/Schron",
            image: "https://i.ibb.co/BZpvTX2/schron.jpg", 
            title: "Schron",

        }

    ]
    
    return (
        <main>
            {projects.map (
                (project, index) =>

                    <ItemPortfolio
                        key={index}
                        link={project.link}
                        image={project.image + (index + 1)}
                        title={project.title} >
                    </ItemPortfolio>
            )}
        </main>
    )
}

export default Portfolio;