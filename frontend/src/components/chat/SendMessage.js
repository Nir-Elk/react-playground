import React from 'react'
import {InputGroup, FormControl} from 'react-bootstrap'


class SendMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {msg: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({msg: event.target.value});
    }

    handleKeyPress(event) {
        if(event.key === 'Enter')
            this.handleSubmit();
    }

    handleSubmit() {
        if (this.state.msg !== "") {
            this.props.sendMessage(this.state.msg);
            this.setState({msg: ""});
        }
    }

    render() {
        return (
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Message:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        value={this.state.msg}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                        placeholder="type your message here"
                    />
                    <InputGroup.Append>
                        <InputGroup.Text id="basic-addon2" onClick={this.handleSubmit}>Send</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
            </div>

        );
    }
}

export default SendMessage;
