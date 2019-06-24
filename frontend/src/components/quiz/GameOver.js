import React from 'react'
import {Button} from "react-bootstrap";

class GameOver extends React.Component {

    render(props) {
        const {grade,init} = this.props;
        return (
            <div className={"Centered"}>
                <h3>Game Over!</h3>
                <h6>Your Grade is {grade}</h6>
                <Button type="button" variant="secondary" onClick={()=>init()}>Start Over</Button>
            </div>
        );
    }
}

export default GameOver;