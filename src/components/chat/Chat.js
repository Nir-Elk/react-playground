import React from 'react'
import NameChoose from './NameChoose'
import SendMessage from './SendMessage'
import Messages from './Messages'
import openSocket from 'socket.io-client'
import ClientsList from './ClientsList'
import {Col, Container, Row} from "react-bootstrap";
import './Chat.css'
let socket;


class Chat extends React.Component {

    constructor(props, context) {
        socket = openSocket('http://localhost:8000');

        super(props, context);
        if(props.initialState) {
            this.state = props.initialState;
            socket.emit('userConnected', {name:this.state.name});
        }
        else
            this.state = {name: null, messages: [], clients: []};
        this.setName = this.setName.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    componentWillMount() {
        socket.on("newMessage", message => {
            if (this.state.name) {
                this.setState(prevState => {
                    prevState.messages.push(message);
                    return prevState;
                });
            }
        });
        socket.on("userConnected", data => {
            this.setState({clients: data.clients});
        });
        socket.on("userDisconnected", client => {
            this.setState(prevState => {
                prevState.clients.splice(prevState.clients.indexOf(client.name), 1);
                return prevState;
            });
        });
    }

    componentWillUnmount() {
        socket.disconnect();
        this.props.notifyApp({chatState:this.state});
    }

    setName(name) {
        this.setState(prevState => {
            prevState.name = name;
            return prevState;
        });
        socket.emit('userConnected', {name});
    }

    sendMessage(text) {
        socket.emit('newMessage', {name: this.state.name, message: text});
    }

    render() {
        return (
            <div className="chat-container">
                {this.state.name === null &&
                <NameChoose setName={this.setName}/>
                }
                {this.state.name !== null &&
                <Container>
                    <Row>
                        <Col xs={3}><ClientsList clients={this.state.clients}/></Col>
                        <Col xs={9}>
                            <Messages messages={this.state.messages}/>
                            <SendMessage sendMessage={this.sendMessage}/>
                        </Col>
                    </Row>
                </Container>
                }
            </div>
        );
    }
}


export default Chat;
