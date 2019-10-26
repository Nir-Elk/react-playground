import React from 'react'
import {FormControl, InputGroup} from 'react-bootstrap'
import LangContext from "../../LangContext";


class NameChoose extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    handleKeyPress(event) {
        if (event.key === 'Enter')
            this.handleSubmit();
    }

    handleSubmit() {
        if (this.state.name !== "")
            this.props.setName(this.state.name);
    }

    render(props) {
        return (
            <LangContext.Consumer>
                {
                    ({chat}) => (
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">{chat["name"]}:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                value={this.state.name}
                                onChange={this.handleChange}
                                onKeyPress={this.handleKeyPress}
                                placeholder={chat["typeYourNameHere"]}
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>)
                }
            </LangContext.Consumer>

        );
    }
}

export default NameChoose;
