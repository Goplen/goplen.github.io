import "./Contact.css"
import React from "react";
import ContactPicture from "../../images/contact.png";
import Phone from "../../images/phone.png";
import Email from "../../images/email.png";
import Linkedin from "../../images/linkedin.png"

const Contact: React.FC = () => {

    return (
        <div className="contact-box">
            <div className="bbox">
                <img className="marcus" src={ContactPicture} alt={"Marcus"}/>
                <div className="information">
                    <h1>Contact</h1>
                    <div className="icons-and-information">
                        <div className="icon-and-information">
                            <img className="icon" src={Phone} alt={"phone"}/>
                            <p>97 58 69 98</p>
                        </div>
                        <div className="icon-and-information">
                            <img className="icon" src={Email} alt={"email"}/>
                            <p>marcus@goplen.dev</p>
                        </div>
                        <div className="icon-and-information">
                            <img className="icon" src={Linkedin} alt={"linkedin"}/>
                            <p>www.linkedin.com/in/mgoplen</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
