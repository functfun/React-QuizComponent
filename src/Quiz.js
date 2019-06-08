import React, {Component} from 'react';
import QuizQuestion from './QuizQuestion.js';
import QuizEnd from './QuizEnd.js';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz_position: 1,
            isQuizEnd: false
        };
    }

    showNextQuestion() {
        if(this.state.quiz_position === quizData.quiz_questions.length) {
            this.setState({
                isQuizEnd: true
            })
        }
        else {
            this.setState(prevState => ({
                quiz_position: prevState.quiz_position + 1
            }));
        }
    }

    handleResetClick() {
        this.setState({
            quiz_position: 1
        });
    }

    render() {
        return <div>
            <QuizQuestion showNextQuestionHandler={this.showNextQuestion.bind(this)} quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}/>
            {
                this.state.isQuizEnd ?
                <QuizEnd resetClickHandler={this.handleResetClick.bind(this)}/> :
                ''
            }

        </div>;
    }
}

export default Quiz;
