import React from 'react'
import Question from './Question'
import Navigation from './Navigation'
import GameOver from './GameOver'
import data from './data'
import './Quiz.css'

class Quiz extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
        this.selectAnswer = this.selectAnswer.bind(this);
        this.selectQuestion = this.selectQuestion.bind(this);
        this.init = this.init.bind(this);
    }

    componentWillMount() {
        this.init();
    }

    init() {
        this.setState({
            questions: data.questions.map(question => {
                question.answer = -1;
                return question
            }), currentQuestion: 0
        });
    }

    selectAnswer(answer) {
        this.setState(prevState => {
            prevState.questions[prevState.currentQuestion].answer = answer;
            return prevState;
        });
    }

    selectQuestion(questionNum) {
        this.setState(prevState => {
            prevState.currentQuestion = questionNum;
            return prevState;
        })
    }

    calcGrade() {
        const singleAnswerGrade = 100 / this.state.questions.length;
        return this.state.questions.map(question =>
            question.answer === question.correctAnswer ? singleAnswerGrade : 0
        ).reduce((current, total) => current + total);
    }

    render() {
        return (
            <div className={"main-container"}>
                {this.state.currentQuestion === this.state.questions.length &&
                    <GameOver grade={this.calcGrade()} init={this.init}/>}
                {this.state.currentQuestion !== this.state.questions.length && <div>
                    <Question question={this.state.questions[this.state.currentQuestion]}
                              selectAnswer={this.selectAnswer}/>
                    <Navigation current={this.state.currentQuestion} selectQuestion={this.selectQuestion}
                                numOfQuestions={this.state.questions.length}/>
                </div>}
            </div>
        );
    }
}

export default Quiz;