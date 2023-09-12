import { useEffect } from "react";

import Question from "../../components/Question";
import CheckBox from "../../components/CheckBox";
import { BiArrowBack, BiRightArrowAlt } from "react-icons/bi";

const QuestionThree = () => {
  useEffect(() => {
    let bar = document.querySelector(".bar") as HTMLElement;

    setTimeout(() => {
      if (bar) {
        bar?.style.setProperty("--progress", "60%");
      }
    }, 200);
  });
  return (
    <div className="question">
      <div className="question-item">
        <Question
          question={"3. What is the main business outcome you are looking for?"}
        />
        <CheckBox checkBoxName={"High Conversion"} />
        <CheckBox checkBoxName={"Better brand connect"} />
        <CheckBox checkBoxName={"Increased Product Awareness"} />
        <div className="navigation">
          <BiArrowBack />
          <button type="button">
            {" "}
            Next
            <BiRightArrowAlt />
          </button>
        </div>
      </div>
      <div className="progress">
        <div className="bar"></div>
      </div>
    </div>
  );
};
export default QuestionThree;
