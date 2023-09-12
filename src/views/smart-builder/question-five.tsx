import { useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";

import Question from "../../components/Question";
import CheckBox from "../../components/CheckBox";

const QuestionFive = () => {
  useEffect(() => {
    let bar = document.querySelector(".bar") as HTMLElement;

    setTimeout(() => {
      if (bar) {
        bar?.style.setProperty("--progress", "100%");
      }
    }, 200);
  });
  return (
    <div className="question">
      <div className="question-item">
        <Question
          question={"5. What is the main business outcome you are looking for?"}
        />
        <CheckBox checkBoxName={"High Conversion"} />
        <CheckBox checkBoxName={"Better brand connect"} />
        <CheckBox checkBoxName={"Increased Product Awareness"} />
        <div className="navigation">
          <BiArrowBack />
          <button type="button"> Build My Page</button>
        </div>
      </div>
      <div className="progress">
        <div className="bar"></div>
      </div>
    </div>
  );
};
export default QuestionFive;
