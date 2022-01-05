import "./Projects.css"
import React from "react";
import Project from "../../components/Project/Project";

const Projects: React.FC = () => {

    return (
        <div className="projects-boxes">
            <Project
                company={"Knowit"}
                date={"Jun 2019 - Today"}
                role={"Group Leader and consultant"}
                description={"Consultant and group leader where I have responsibility for a group of developers."}
                color={"#a1c9c9"}
            />
            <Project
                company={"Entur"}
                date={"Des 2021 - Today"}
                role={"Web Developer"}
                description={"Team Produkt is responsible for the development and management of all Entur's products across all operators."}
                color={"white"}
            />
            <Project
                company={"Entur"}
                date={"Jun 2019 - Oct 2021"}
                role={"Fullstack Developer"}
                description={"Team Sales is responsible for the development and management of everything that happens after an offer has been created."}
                color={"white"}
            />
            <Project
                company={"University of Oslo"}
                date={"Des 2017 - Des 2019"}
                role={"Graduate student & scientist"}
                description={"Completed master's thesis and wrote a scientific article on onboarding."}
                color={"#a1c9c9"}
            />
        </div>
    )
}

export default Projects;
