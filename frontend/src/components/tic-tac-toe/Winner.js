import React from "react"
import Sign from "./Sign"
import LangContext from "../../LangContext";

class Winner extends React.Component {

    render(props) {
        return (
            <LangContext.Consumer>
                {
                    ({ticTacToe}) => (
                        <div style={{fontSize: '3rem'}}>
                            {this.props.winner === 0 ? ticTacToe["noWinner"] : ticTacToe["theWinner"]}
                            {this.props.winner > 0 && <Sign sign={this.props.winner}/>}
                            <div>
                                <button onClick={() => this.props.init()}>{ticTacToe["startOver"]}</button>
                            </div>
                        </div>)
                }
            </LangContext.Consumer>
        );
    }
}

export default Winner;
