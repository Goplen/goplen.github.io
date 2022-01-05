import "./Role.css"
import React from "react";
import RoleIcon from "../../images/role.png";

interface RoleProps {
    role: string
}

const Role: React.FC<RoleProps> = ({role}) => {

    return (
        <div className="roleComp">
            <img className="icon" src={RoleIcon} alt={"Role"}/>
            <p>{role}</p>
        </div>
    )
}

export default Role;
