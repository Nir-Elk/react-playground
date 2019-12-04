import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar} from "react-bootstrap";
import logo from './logo.svg';
import Chat from './components/chat/Chat';
import Quiz from './components/quiz/Quiz';
import MainPage from './components/mainPage/MainPage';
import english from './dictionaries/english';
import hebrew from './dictionaries/hebrew';
import LangContext from './LangContext'
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Gallery from "./components/gallery/Gallery";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";
import usePlayground from "./hooks/usePlayground";
import {PlaygroundContextProvider} from "./PlaygroundContext";

const codeToDic = {en: english, heb: hebrew};

export default () => {
    const [lang, setLang] = React.useState('en');
    const _usePlayground = usePlayground();
    const dictionary = codeToDic[lang];

    return (
        <PlaygroundContextProvider value={_usePlayground}>

            <LangContext.Provider value={dictionary}>
                <Router>
                    <Navbar bg="dark" variant="dark">

                        <Link to={'/'}>
                            <Navbar.Brand>
                                <img
                                    alt=""
                                    src={logo}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                />
                                {dictionary.siteName}
                            </Navbar.Brand>
                        </Link>
                        <Nav className="ml-auto pr-md-5" style={{marginRight: '30px'}}>
                            <NavDropdown title={dictionary.menu.title} id="basic-nav-dropdown">
                                {
                                    ["chat", "ticTacToe", "quiz"].map((item, index) =>
                                        <LinkContainer key={`${item}${index}`} to={'/' + item}>
                                            <NavDropdown.Item>
                                                {dictionary.menu.items[item]}
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                    )
                                }
                            </NavDropdown>
                        </Nav>
                    </Navbar>
                    <Route exact path={'/'} component={MainPage}/>
                    {/*<Route path={'/chat'} component={Chat}/>*/}
                    <Route path={'/ticTacToe'} component={TicTacToe}/>
                    {/*<Route path={'/quiz'} component={Quiz}/>*/}
                    {/*<Route path={'/gallery'} component={Gallery}/>*/}
                </Router>
            </LangContext.Provider>
        </PlaygroundContextProvider>
    );
}


{/*<Nav className="ml-auto pr-md-5" style={{marginRight: '30px'}}>*/
}
{/*    <NavDropdown title={dictionary["langMenu"]["title"]} id="basic-nav-dropdown">*/
}
{/*        {*/
}
{/*            ["en", "heb"].map((code, index) =>*/
}
{/*                <NavDropdown.Item key={`${code}${index}`} onClick={() => {*/
}
{/*                    this.setLang(code);*/
}
{/*                }}>{dictionary["langMenu"]["items"][code]}</NavDropdown.Item>)*/
}
{/*        }*/
}
{/*    </NavDropdown>*/
}
{/*</Nav>*/
}