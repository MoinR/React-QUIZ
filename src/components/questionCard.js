import React from 'react';
import q from './question.json';
import { connect } from 'react-redux';
import { insertAns, updateAns } from '../redux/actions';


export class QuestionCard extends React.Component {
    constructor() {
        super();
        this.state = {
            questions: q,
            answer: [],
            correctAns: 0,
            isQueHidden : false
        }
        console.log('Constructed ');
    }
    componentDidMount() {
        console.log('Mounted ');
    }
    componentDidUpdate(){

    }
    setAnswer = (e) => {

        let q_no = e.target.name;
        let sub_ans = e.target.value;
        let answerStatus = this.validateAnswer(parseInt(q_no), sub_ans);
        let ans = {
            questionNo: q_no,
            submittedAnswer: sub_ans,
            isCorrect: answerStatus
        }

        /* if Answer is not existing then it will be inserted, else it will be updated by isExistingAnswer method*/
        if (!this.isExistingAnswer(ans)) {
            this.props.insertAns(ans);
            console.log(this.props.arr);
        }


    }
    isExistingAnswer = (ans) => {
        for (let i = 0; i < this.props.arr.length; i++) {
            if (this.props.arr[i].questionNo === ans.questionNo) {
                console.log('Duplication found at : ', i);
                this.props.updateAns(ans, i);
                console.log(this.props.arr);
                return true;
            }
        }
        return false;
    }
    validateAnswer = (index, answer) => {
        if (this.state.questions[index - 1].Correct_answer === answer) {
            this.setState({
                correctAns: this.state.correctAns + 1
            });
            return true;
        } else {
            return false;
        }
    }
    handleInput = (e) => {

        this.setState({
            answer: [...this.state.answer, e.target.val]
        });
    }
    updateView = () => {
        this.setState({
            isQueHidden : !this.state.isQueHidden
        })
    }
    render() {
        return (
            <div className="app p-5 text-dark quiz-app">
                
                {this.state.questions.map((i, index) =>
                    <div className="question card mx-auto mt-4 w-lg-50" hidden={this.state.isQueHidden} key={i.id}>
                        <div className="card-header text-dark">
                            {(index + 1) + ". " + i.question}
                        </div>
                        <ul className="list-group list-group-flush" >

                            {i.answers.map((j, ans_index) =>
                                <li className="list-group-item" key={ans_index}>
                                    <div className="form-check" onChange={this.setAnswer}>
                                        <input className="form-check-input" type="radio" onChange={this.handleInput} name={i.id} id={`opt-${i.id}-${ans_index}`} value={j} />
                                        <label className="form-check-label" htmlFor={`opt-${i.id}-${ans_index}`}> {j}  </label>
                                    </div>
                                </li>
                            )}

                        </ul>
                    </div>
                )}
                <div className="text-light" hidden={!this.state.isQueHidden}>
                    Your answers :
                    <ul>
                        {this.props.arr.map((x, index) =>
                            <li key={index} className={(x.isCorrect) ? 'text-success' : 'text-danger'}> {x.questionNo + " : " + x.submittedAnswer} </li>
                        )}
                    </ul>
                    Total Questions : {this.state.questions.length}
                    <br />
                    Correct answer : {this.state.correctAns}
                </div>
                <button className="btn btn-primary mt-4" onClick={this.updateView} hidden={this.state.isQueHidden}> Submit test </button>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    arr: state.quizReducer
})

export default connect(mapStateToProps, { insertAns: insertAns, updateAns: updateAns })(QuestionCard);