import React from "react"
import Sign from "./Sign"
import LangContext from "../../LangContext";
import {Button} from "react-bootstrap";


class Winner extends React.Component {

    render(props) {
        return (
            <LangContext.Consumer>
                {
                    ({ticTacToe}) => (
                        <div style={{fontSize: '3rem'}}>
                            <div className={'pb-2'}> {this.props.winner === 0 ? ticTacToe["noWinner"] : ticTacToe["theWinner"]} </div>
                            {this.props.winner > 0 && <Sign sign={this.props.winner}/>}
                            <div>
                                <Button onClick={() => this.props.init()}>{ticTacToe["startOver"]}</Button>
                            </div>
                        </div>)
                }
            </LangContext.Consumer>
        );
    }
}

export default Winner;
