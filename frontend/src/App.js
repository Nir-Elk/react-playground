import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {Navbar} from "react-bootstrap";
import logo from './logo.svg';
import Chat from './components/chat/Chat';
import TicTacToe from './components/tic-tac-toe/TicTacToe';
import Quiz from './components/quiz/Quiz';
import MainPage from './components/mainPage/MainPage';
import english from './dictionaries/english';
import hebrew from './dictionaries/hebrew';
import LangContext from './LangContext'
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const codeToDic = {en: english, heb: hebrew};

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {chatState: null, ticTacToeState: null, quizState: null, lang: "en"};

        this.notify = this.notify.bind(this);
    }

    notify(someState) {
        this.setState(someState);
    }

    render() {
        const dictionary = codeToDic[this.state.lang];

        return (
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
                                    ["chat", "ticTacToe", "quiz"].map(item =>
                                        <NavDropdown.Item
                                            href={'/' + item}>{dictionary.menu.items[item]}</NavDropdown.Item>)
                                }
                            </NavDropdown>
                        </Nav>
                        <Nav className="ml-auto pr-md-5" style={{marginRight: '30px'}}>
                            <NavDropdown title={dictionary["langMenu"]["title"]} id="basic-nav-dropdown">
                                {
                                    ["en", "heb"].map(code =>
                                        <NavDropdown.Item onClick={() => {
                                            console.log(code);
                                        }}>{dictionary["langMenu"]["items"][code]}</NavDropdown.Item>)
                                }
                            </NavDropdown>
                        </Nav>
                    </Navbar>

                    <Route exact path={'/'} component={MainPage}/>
                    <Route path={'/chat'}
                           component={() => <Chat initialState={this.state.chatState}
                                                  notifyApp={this.notify}/>}/>
                    <Route path={'/ticTacToe'}
                           component={() => <TicTacToe initialState={this.state.ticTacToeState}
                                                       notifyApp={this.notify}/>}/>
                    <Route path={'/quiz'}
                           component={() => <Quiz initialState={this.state.quizState}
                                                  notifyApp={this.notify}/>}/>

                </Router>
            </LangContext.Provider>
        );
    }
}

export default App;
