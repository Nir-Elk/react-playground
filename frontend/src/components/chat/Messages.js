import React from 'react'
import {Card} from "react-bootstrap";

class Messages extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        const objDiv = document.getElementById("messages");
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    render(props) {
        return (
            <div id={"messages"} className={"messages"}>
                {this.props.messages.map((message, index) =>
                    <Card key={`${message}${index}`} style={{margin:"0 10px 10px 0"}}>
                        <Card.Header>{message.name} <span style={{float:"right"}}>{message.date}</span></Card.Header>
                        <Card.Body style={{marginLeft:"2%"}}>
                            {message.message}
                        </Card.Body>
                    </Card>
                )}
            </div>
        );
    }
}

export default Messages;
