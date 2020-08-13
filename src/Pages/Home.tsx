import React, {useState} from 'react'
import Dice from "../Components/Dice";
import Button from 'react-bootstrap/Button'
import dices from "../resources/0.png"
import forehand from "../resources/forehand.png"
import backhand from "../resources/backhand.png"
import roller from "../resources/roller.png"
import wild from "../resources/wild.png"
import hyzer from "../resources/hyzer.png"
import anhyzer from "../resources/anhyzer.png"
import driver from "../resources/driver.png"
import mid from "../resources/mid.png"
import putter from "../resources/putter.png"
import overstable from "../resources/overstabile.png"
import understable from "../resources/understable.png"
import loading from "../resources/loading.png"

import "./Home.scss"

const Home: React.FC<{}> = () => {
    const [diceOneChoice, setDiceOneChoice] = useState(0);
    const [diceTwoChoice, setDiceTwoChoice] = useState(0);

    const onClickDiceRoll = () => {
        setDiceOneChoice(7);
        setDiceTwoChoice(7);

        setTimeout(function(){
            setDiceOneChoice(getRandomInt(5)+1);
            setDiceTwoChoice(getRandomInt(5)+1);
            }, 1000)
    }

    return (
        <div className="Home">
            <h1>DISC GOLF DICE</h1>
            <div className="dices">
                <Dice header={"DISC CHOISE"} active={diceOneChoice} options={[dices, putter, mid, overstable, understable, driver, wild, loading ]} />
                <Dice header={"SHOT CHOISE"} active={diceTwoChoice} options={[dices, forehand, backhand, roller, hyzer, anhyzer, wild, loading]} />
            </div>
            <div id="button">
                <Button variant="dark" block onClick={onClickDiceRoll}>ROLL DICE</Button>
            </div>
        </div>
    )
};

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

export default Home
