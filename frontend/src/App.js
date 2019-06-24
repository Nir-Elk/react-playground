import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from './logo.svg';
import Chat from './components/chat/Chat';
import TicTacToe from './components/tic-tac-toe/TicTacToe';
import Quiz from './components/quiz/Quiz';
import MainPage from './components/mainPage/MainPage'

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {chatState: null,ticTacToeState: null, quizState:null};
        this.notify = this.notify.bind(this);
    }

    notify(someState) {
        this.setState(someState);
    }

    render() {
        return (
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
                        {' React Playground'}
                    </Navbar.Brand>
                </Link>

                    <Nav className="ml-auto pr-md-5" style={{marginRight:'30px'}}>
                        <NavDropdown title="Projects" id="basic-nav-dropdown">
                            <NavDropdown.Item href={'/chat'}>Chat</NavDropdown.Item>
                            <NavDropdown.Item href={'/tictactoe'}>Tic Tac Toe</NavDropdown.Item>
                            <NavDropdown.Item href={'/quiz'}>Quiz</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar>

                <Route exact path={'/'} component={MainPage}/>
                <Route path={'/chat'}
                       component={() => <Chat initialState={this.state.chatState} notifyApp={this.notify}/>}/>
                <Route path={'/tictactoe'}
                       component={() => <TicTacToe initialState={this.state.ticTacToeState} notifyApp={this.notify}/>}/>
                <Route path={'/quiz'}
                       component={() => <Quiz initialState={this.state.quizState} notifyApp={this.notify}/>}/>

            </Router>
        );
    }
}

export default App;