import React from "react";
import "./Dice.scss"

type DiceProps = {
    header: string,
    active: number,
    options: string[]
}

const Dice: React.FC<DiceProps> = ({header, active, options}) => {

    return (
        <div className="Dice">
            <h4>{header}</h4>
            <div className="Square">
                <h5><img src={options[active]}/></h5>
            </div>
        </div>
    )
};

export default Dice
