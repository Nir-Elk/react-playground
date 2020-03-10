import React from 'react'

class Question extends React.Component{

    render(props) {
        const {question,selectAnswer} = this.props;
        return (
            <div className={"question"}>
                <div className={"mb-2"}>{question.question}</div>
                {question.choices.map((choice,index)=>
                    <div key={choice + index}
                         onClick={() => selectAnswer(index)}>
                        <input
                            type="radio"
                            checked={question.answer === index}
                            name="choice"
                            value={index}/><span className={"ml-1"}>{choice}</span></div>
                )}
            </div>
        );
    }
}

export default Question;