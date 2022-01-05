import "./Description.css"
import React from "react";
import DescriptionIcon from "../../images/info.png"

interface DescriptionProps {
    description: string
}

const Description: React.FC<DescriptionProps> = ({description}) => {

    return (
        <div className="descriptionComp">
            <img className="icon" src={DescriptionIcon} alt={"Description"}/>
            <p>{description}</p>
        </div>
    )
}

export default Description;
