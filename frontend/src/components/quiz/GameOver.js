import React from 'react'
import {Button} from "react-bootstrap";
import LangContext from "../../LangContext";

class GameOver extends React.Component {

    render(props) {
        const {grade, init} = this.props;
        return (
            <LangContext.Consumer>
                {
                    ({quiz}) => (
                        <div className={"Centered"}>
                            <h3>{quiz["gameOver"]}</h3>
                            <h6>{quiz["grade"]}{grade}</h6>
                            <Button type="button" variant="secondary" onClick={() => init()}>{quiz["startOver"]}</Button>
                        </div>)
                }
            </LangContext.Consumer>
        );
    }
}

export default GameOver;