import { useEffect, useState } from "react";
import Question from "../../components/Question";
// import CheckBox from "../../components/CheckBox";
import { useNavigate } from "react-router-dom";
import { BiArrowBack, BiRightArrowAlt } from "react-icons/bi";

const QuestionOne = () => {
  const navigate = useNavigate();

  const [selectAnswer, setSelectAnswer] = useState([
    { title: "High Conversion", selected: false },
    { title: "Better brand connect", selected: false },
    { title: "Increased Product Awareness", selected: false },
  ]);
  useEffect(() => {
    let bar = document.querySelector(".bar") as HTMLElement;

    setTimeout(() => {
      if (bar) {
        bar?.style.setProperty("--progress", "20%");
      }
    }, 200);
  });
  const handleNavigation = () => {
    navigate("/dashboard/smart-builder/question-two");
  };

  const handleBackClick = () => navigate(-1);

  const handleChange = (done: boolean, i: number) => {
    let tmp = selectAnswer[i];
    tmp.selected = !done;
    let todosClone = [...selectAnswer];
    todosClone[i] = tmp;
    setSelectAnswer([...todosClone]);
  };

  return (
    <div className="questionContainer">
      <div className="question">
        <div className="question-item">
          <Question
            question={
              "1. What is the main business outcome you are looking for?"
            }
          />
          {/* <CheckBox checkBoxName={"High Conversion"} />
          <CheckBox checkBoxName={"Better brand connect"} />
          <CheckBox checkBoxName={"Increased Product Awareness"} /> */}
          {selectAnswer.map(({ title, selected }, i) => (
            <div key={i} className="checkbox">
              <label className="checkboxLabel" htmlFor={String(i)}>
                <input
                  type="checkbox"
                  onChange={() => handleChange(selected, i)}
                  checked={selected}
                  id={String(i)}
                />
                <span>{title}</span>
              </label>
            </div>
          ))}
          <div className="navigation">
            <button type="button" onClick={handleBackClick}>
              <BiArrowBack />
            </button>
            <div className="next-button">
              <button
                type="button"
                onClick={handleNavigation}
                disabled={
                  selectAnswer.filter((todo) => todo.selected).length > 0
                    ? false
                    : true
                }
              >
                {" "}
                Next
                <BiRightArrowAlt />
              </button>
            </div>
          </div>
        </div>
        <div className="progress">
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
};
export default QuestionOne;
