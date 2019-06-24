import React from 'react'

class Question extends React.Component{

    render(props) {
        const {question,selectAnswer} = this.props;
        return (
            <div>
                {question.question}
                {question.choices.map((choice,index)=>
                    <div key={choice + index}
                         onClick={() => selectAnswer(index)}>
                        <input
                            type="radio"
                            checked={question.answer === index}
                            name="choice"
                            value={index}/>{choice}</div>
                )}
            </div>
        );
    }
}

export default Question;