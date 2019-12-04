import {useState} from 'react'

export const ticTacToe = 'ticTacToe';
export const gallery = 'gallery';
export const quiz = 'quiz';
export const chat = 'chat';

const games = [ticTacToe, gallery, quiz, chat];

export const getInitialStates = game => ({
    [ticTacToe]: {board: [[0, 0, 0], [0, 0, 0], [0, 0, 0]], turnX: true, turn: 0, winner: 0},
    [gallery]: {},
    [quiz]: {},
    [chat]: {}
}[game]);

export default () => games.reduce((prev, current) => {
    const [get,set] = useState(getInitialStates(current));
    prev[current] = { get, set};
    return prev;
}, {})
