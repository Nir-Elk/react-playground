import React from "react";
import Cell from "./Cell"
import Winner from "./Winner";
import "./TicTacToe.css"
import {Row, Col} from "react-bootstrap";
import PlaygroundContext, {PlaygroundContextConsumer} from "../../PlaygroundContext";
import {getInitialStates, ticTacToe} from "../../hooks/usePlayground";
import Sign from "./Sign";

class TicTacToe extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.service = context[ticTacToe];
    }

    init = () => {
        this.service.set(getInitialStates(ticTacToe));
    };

    checkWinner = (board) => {
        let last;
        for (let i = 0; i < 3; i++) {
            last = board[i][0];
            for (let j = 1; j < 3; j++) {
                if (last !== board[i][j] || last === 0) {
                    last = 0;
                    break;
                }
            }
            if (last)
                return last
        }
        for (let i = 0; i < 3; i++) {
            last = board[0][i];
            for (let j = 1; j < 3; j++) {
                if (last !== board[j][i] || !last) {
                    last = 0;
                    break;
                }
            }
            if (last)
                return last
        }
        if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2])
            return board[0][0];
        if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0])
            return board[0][2];
        return 0;
    };

    put = (x, y) => {
        this.service.set((prevState) => {
            console.log(prevState, "csacsacsa");
            prevState.board[x][y] = prevState.turnX ? 1 : 2;
            prevState.turnX = !prevState.turnX;
            prevState.turn++;
            if (prevState.turn >= 5) {
                switch (this.checkWinner(prevState.board)) {
                    case 1:
                        prevState.winner = 1;
                        break;
                    case 2:
                        prevState.winner = 2;
                        break;
                    default:
                        break;
                }
            }
            return {...prevState};
        });
    };

    render() {
        const {winner} = this.service.get;
        return (
            <PlaygroundContextConsumer>
                {
                    ({ticTacToe: service}) => (
                        <div className='grid'>
                            {(service.get.winner > 0 || service.get.turn >= 9) &&
                            <Winner winner={service.get.winner} init={this.init}/>
                            }
                            {!service.get.winner && service.get.turn < 9 &&

                            service.get.board.map((row, x) =>
                                <Row key={`${row}${x}`} className="flex flex-column">
                                    {
                                        row.map((cell, y) =>
                                            <Col sm={1} key={`${row}${x}${cell}${y}`}>
                                                <Cell x={x} y={y} put={this.put} cell={cell} />
                                            </Col>
                                        )
                                    }
                                </Row>
                            )
                            }
                        </div>)
                }

            </PlaygroundContextConsumer>
        );
    }
}

TicTacToe.contextType = PlaygroundContext;
export default TicTacToe;

