import { useEffect, useState } from "react";
import "../../../styles/question.scss";

const QuestionTwo = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      type: "checkbox",
      options: ["Paris", "Berlin", "London", "Rome"],
      // answer: "Paris",
    },
    {
      question:
        "Which planets are considered gas giants? (Select all that apply)",
      type: "checkbox",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      // answer: ["Jupiter", "Saturn"],
    },
    {
      question:
        "Which planets are considered gas giants? (Select all that apply)",
      type: "checkbox",
      options: ["Venusss", "Mssars", "Jupitefffr", "ff"],
      // answer: ["Jupiter", "Saturn"],
    },
    {
      question:
        "Which planets are considered gas giants? (Select all that apply)",
      type: "checkbox",
      options: ["Venussds", "Mssadrs", "Jupitefffdr", "ffdd"],
      // answer: ["Jupiter", "Saturn"],
    },
    // Add more questions here
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNextQuestion = (currentQuestion) => {
    if (currentQuestion < questions.length) {
      const nextQ = currentQuestion + 1;
      setCurrentQuestion(nextQ);
    }
  };

  const handleCheck = () => {};

  return (
    <>
      <div className="outerContainer">
        <div className="question">{questions[currentQuestion].question}</div>
        <div className="options">
          <ul>
            {questions[currentQuestion].options.map((ele, i) => {
              return (
                <div className="listItem">
                  <input type="checkbox" onChange={handleCheck} />
                  <li className="optionList">{ele}</li>
                </div>
              );
            })}
          </ul>
        </div>
        <button onClick={() => handleNextQuestion(currentQuestion)}>
          Next Question
        </button>
      </div>
    </>
  );
};

export default QuestionTwo;
