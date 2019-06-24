import React from 'react';
import logo from '../../logo.svg';
import './MainPage.css';

function App() {
    return (
        <div className="MainPage">
            <header className="MainPage-header">
                <img src={logo} className="MainPage-logo" alt="logo" />
                <p>
                    visit <code><a href="https://github.com/Nir-Elk/" className={"gitLink"}>github.com/Nir-Elk</a></code> and take a big breath.
                </p>
            </header>
        </div>
    );
}

export default App;
