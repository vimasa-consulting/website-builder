import Question from "../../components/Question";
import CheckBox from "../../components/CheckBox";

const QuestionFive = () => {
    return (
    <div className="question">
        <div className="question-item">
            <Question question={"What is the main business outcome you are looking for?"}/>
            <CheckBox checkBoxName={"High Conversion"}/>
            <CheckBox checkBoxName={"Better brand connect"}/>
            <CheckBox checkBoxName={"Increased Product Awareness"}/>
            <div className="navigation">
                <p> Back </p>
                <button type="button"> Next</button>
            </div>
        </div>
    </div>);
}
export default QuestionFive