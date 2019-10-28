import React from 'react'
import {InputGroup, FormControl} from 'react-bootstrap'
import LangContext from "../../LangContext";


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
        if (event.key === 'Enter')
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
            <LangContext.Consumer>
                {
                    ({chat}) => (
                        <div>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">{chat["message"]}</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    value={this.state.msg}
                                    onChange={this.handleChange}
                                    onKeyPress={this.handleKeyPress}
                                    placeholder={chat["typeMesage"]}
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text id="basic-addon2"
                                                     onClick={this.handleSubmit}>{chat["send"]}</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>)
                }
            </LangContext.Consumer>

        );
    }
}

export default SendMessage;
