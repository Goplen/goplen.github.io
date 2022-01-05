import "./Date.css"
import React from "react";
import DateIcon from "../../images/date.jpeg";

interface DateProps {
    date: string
}

const Date: React.FC<DateProps> = ({date}) => {

    return (
        <div className="date">
            <img className="icon" src={DateIcon} alt={"Date"}/>
            <p>{date}</p>
        </div>
    )
}

export default Date;
