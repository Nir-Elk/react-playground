import React from 'react'
import {Button} from "react-bootstrap";
import {Badge} from 'react-bootstrap'
import LangContext from "../../LangContext";

class Navigation extends React.Component {

    render(props) {
        const {current, selectQuestion, numOfQuestions} = this.props;
        let nums = [];
        for (let i = 0; i < numOfQuestions; i++) {
            nums.push(i);
        }
        return (
            <LangContext.Consumer>
                {
                    ({quiz}) => (
                        <div className={"flex-container"}>
                            <Button onClick={() => selectQuestion(current - 1)} disabled={!current}
                                    variant="secondary">{quiz["back"]}</Button>
                            <div>
                                {nums.map(value => <Badge pill variant={current === value ? "primary" : "secondary"}
                                                          onClick={() => selectQuestion(value)}
                                                          key={value}>{value + 1}</Badge>)}
                            </div>
                            <Button onClick={() => selectQuestion(current + 1)}
                                    variant="secondary">{current !== numOfQuestions - 1 ? quiz["next"] : quiz["done"]}</Button>

                        </div>)
                }
            </LangContext.Consumer>
        );
    }
}

export default Navigation;