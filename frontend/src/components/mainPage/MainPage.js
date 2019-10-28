import React from 'react';
import logo from '../../logo.svg';
import './MainPage.css';
import LangContext from "../../LangContext";

function App() {
    return (
        <LangContext.Consumer>
            {
                ({mainPage}) => (
            <div className="MainPage">
                <header className="MainPage-header">
                    <img src={logo} className="MainPage-logo" alt="logo"/>
                    <p>
                        {mainPage["visit"]} <code><a href="https://github.com/Nir-Elk/"
                                       className={"gitLink"}>github.com/Nir-Elk</a></code> {mainPage["text"]}
                    </p>
                </header>
            </div>)
            }
        </LangContext.Consumer>

    );
}

export default App;
