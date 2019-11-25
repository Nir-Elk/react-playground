import React from 'react'
import {FormControl, InputGroup} from 'react-bootstrap'
import LangContext from "../../LangContext";


class Search extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {text: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    handleKeyPress(event) {
        if (event.key === 'Enter')
            this.handleSubmit();
    }

    handleSubmit() {
        if (this.state.text !== "")
            this.props.setSearch(this.state.text);
    }

    render(props) {
        return (
            <LangContext.Consumer>
                {
                    ({search}) => (
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">{search["search"]}:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                value={this.state.text}
                                onChange={this.handleChange}
                                onKeyPress={this.handleKeyPress}
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>)
                }
            </LangContext.Consumer>

        );
    }
}

export default Search;
