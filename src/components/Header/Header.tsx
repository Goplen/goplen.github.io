import "./Header.css"
import React from "react";

const Header: React.FC = () => {

    const showFocus = (menuItem: string): boolean => {
        const pathname = window.location.pathname;
        return menuItem === pathname;
    }

    return (
        <>
            <div className="header">
                <div className="header-content">
                    <div className="header-content">
                        <div className="name-role">
                            <div className="name">
                                <h1>MARCUS GOPLEN</h1>
                            </div>
                            <div className="role">
                                <h1>/ SOFTWARE DEVELOPER</h1>
                            </div>
                        </div>
                        <div className="navigation">
                            <div
                                className="navigation-item"
                                style={{color: showFocus("/") ? "white" : "black"}}
                                onClick={() => window.location.href = '/'}
                            >
                                <h1>ABOUT ME</h1>
                            </div>
                            <div className="navigation-item"
                                 style={{color: showFocus("/projects") ? "white" : "black"}}
                                 onClick={() => window.location.href = '/projects'}
                            >
                                <h1>PROJECTS</h1>
                            </div>
                            <div className="navigation-item"
                                 style={{color: showFocus("/contact") ? "white" : "black"}}
                                 onClick={() => window.location.href = '/contact'}
                            >
                                <h1>CONTACT</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
