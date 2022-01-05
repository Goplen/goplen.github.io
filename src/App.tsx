import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import About from "./Scenes/About/About";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Contact from "./Scenes/Contact/Contact";
import Projects from "./Scenes/Projects/Projects";
import Resume from "./Scenes/Resume/Resume";

function App() {
  return (
    <div className="app">
        <div className="app">
            <Header />
            <Router>
                <Route exact path="/">
                    <About />
                </Route>
                <Route exact path="/resume">
                    <Resume />
                </Route>
                <Route exact path="/projects">
                    <Projects />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
            </Router>
            <div className="copyright">
                <p>© 2022 by Marcus Goplen</p>
            </div>
        </div>
    </div>
  );
}

export default App;
