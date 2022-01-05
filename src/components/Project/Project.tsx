import "./Project.css"
import React from "react";
import Date from "../Date/Date";
import Role from "../Role/Role";
import Description from "../Description/Description";

interface ProjectProps {
    company: string;
    date: string;
    role: string;
    description: string;
    color: string
}

const Project: React.FC<ProjectProps> = ({company, date, role, description, color}) => {

    return (
        <div className="box" style={{backgroundColor: color}}>
            <h1>{company}</h1>
            <Role role={role} />
            <Date date={date} />
            <Description description={description} />
        </div>
    )
}

export default Project;
