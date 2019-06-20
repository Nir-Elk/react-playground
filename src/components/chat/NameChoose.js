import React from 'react'
import {InputGroup, FormControl} from 'react-bootstrap'


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
        if(event.key === 'Enter')
            this.handleSubmit();
    }

    handleSubmit() {
        if (this.state.name !== "")
            this.props.setName(this.state.name);
    }

    render(props) {
        return (
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Name:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        value={this.state.name}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                        placeholder="type your name here"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </div>
        );
    }
}

export default NameChoose;