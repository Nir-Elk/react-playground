import React from "react";
import Cell from "./Cell"
import Winner from "./Winner";
import "./TicTacToe.css"
import {Col, Row} from "react-bootstrap";

class TicTacToe extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};
        this.init = this.init.bind(this);
        this.put = this.put.bind(this);
    }

    componentWillMount() {
        this.init();
    }

    init() {
        this.setState({board: [[0, 0, 0], [0, 0, 0], [0, 0, 0]], turnX: true, turn: 0, winner: 0, checking: false});
    }

    checkWinner(board) {
        if ((board[0][0] === board[1][1] && board[1][1] === board[2][2]) || (board[2][0] === board[1][1] && board[1][1] === board[0][2]))
            return board[1][1];
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
        return 0;
    }

    put(x, y) {

            this.setState(prevState => {
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
                return prevState;
            });
    }

    render() {
        return (
            <div className='grid'>
                {(this.state.winner > 0 || this.state.turn >= 9) &&
                <Winner winner={this.state.winner} init={this.init}/>
                }
                {!this.state.winner && this.state.turn < 9 &&

                this.state.board.map((row, x) =>
                    <Row key={`${row}${x}`} className="flex flex-column">
                        {
                            row.map((cell, y) =>
                                <Col sm={1} key={`${row}${x}${cell}${y}`}>
                                    <Cell cell={cell} x={x} y={y} put={this.put}/>
                                </Col>
                            )
                        }
                    </Row>
                )
                }
            </div>
        );
    }
}

export default TicTacToe;

