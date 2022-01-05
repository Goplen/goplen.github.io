import "./About.css"
import React from "react";
import Image from "../../images/picture.jpeg"
import Facebook from "../../images/facebook.png"
import Linkedin from "../../images/linkedin.png"
import Github from "../../images/github.png"

const About: React.FC = () => {

    return (
        <div className="content-boxes">
            <div className="left-box">
                <img className="marcus" src={Image} alt={"Marcus"}/>
                <h1>Marcus Goplen</h1>
                <div className="strike"> </div>
                <h3>Software Developer</h3>
                <div className="contact">
                    <a className="icon" href="https://www.facebook.com/MrGoplen">
                        <img className="icon" src={Facebook} alt={"facebook"} />
                    </a>
                    <a className="icon" href="https://github.com/goplen">
                        <img className="icon" src={Github} alt={"Github"}/>
                    </a>
                    <a className="icon" href="https://www.linkedin.com/in/mgoplen/">
                        <img className="icon" src={Linkedin} alt={"linkedin"}/>
                    </a>
                </div>
            </div>
            <div className="right-box">
                <div className="hello">
                    <h1>Hello</h1>
                </div>
                <div className="who-what">
                    <h4>This is who I am and what I do</h4>
                </div>
                <div className="buttons">
                    <button className="button-left " onClick={() => window.location.href = '/projects'}>Projects</button>
                    <button className="button-right" onClick={() => window.location.href = '/contact'}>Contact</button>
                </div>
                <div className="core-competence">
                    <ul>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>SQL</li>
                    </ul>
                    <ul>
                        <li>Kotlin</li>
                        <li>Java</li>
                        <li>Spring</li>
                        <li>Node.js</li>
                    </ul>
                </div>
                <div className="text">
                    <p>
                        I have a master's degree in Programming and Systems Architecture from the University of Oslo.
                    </p>
                    <p>
                        Mostly worked as a full stack developer, but with a special love for web development,
                         management and agile methodology.
                    </p>
                    <blockquote>
                        Marcus is a committed and creative man,
                        with the ability to get acquainted with new issues in a short time,
                        and the willingness to contribute in almost all areas.
                    </blockquote>
                </div>
            </div>
        </div>
    )
}

export default About;
