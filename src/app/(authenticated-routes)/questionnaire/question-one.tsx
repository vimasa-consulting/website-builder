import { useEffect, useState } from "react";
import Question from "./Question";
// import CheckBox from "../../components/CheckBox";
// import { useNavigate } from "react-router-dom";
import "../../../styles/question.scss";
import { BiArrowBack, BiRightArrowAlt } from "react-icons/bi";

const QuestionOne = () => {
  // const navigate = useNavigate();

  // const [selectAnswer, setSelectAnswer] = useState([
  //   { title: "High Conversion", selected: false },
  //   { title: "Better brand connect", selected: false },
  //   { title: "Increased Product Awareness", selected: false },
  // ]);
  // useEffect(() => {
  //   let bar = document.querySelector(".bar") as HTMLElement;

  //   setTimeout(() => {
  //     if (bar) {
  //       bar?.style.setProperty("--progress", "20%");
  //     }
  //   }, 200);
  // });
  // const handleNavigation = () => {
  //   // navigate("/dashboard/smart-builder/question-two");
  // };

  // // const handleBackClick = () => navigate(-1);

  // const handleChange = (done: boolean, i: number) => {
  //   let tmp = selectAnswer[i];
  //   tmp.selected = !done;
  //   let todosClone = [...selectAnswer];
  //   todosClone[i] = tmp;
  //   setSelectAnswer([...todosClone]);
  // };

  // return (
  //   <div className="questionContainer">
  //     <div className="question">
  //       <div className="question-item">
  //         <Question
  //           question={
  //             "1. What is the main business outcome you are looking for?"
  //           }
  //         />
  //         {/* <CheckBox checkBoxName={"High Conversion"} />
  //         <CheckBox checkBoxName={"Better brand connect"} />
  //         <CheckBox checkBoxName={"Increased Product Awareness"} /> */}
  //         {selectAnswer.map(({ title, selected }, i) => (
  //           <div key={i} className="checkbox">
  //             <label className="checkboxLabel" htmlFor={String(i)}>
  //               <input
  //                 type="checkbox"
  //                 onChange={() => handleChange(selected, i)}
  //                 checked={selected}
  //                 id={String(i)}
  //               />
  //               <span>{title}</span>
  //             </label>
  //           </div>
  //         ))}
  //         <div className="navigation">
  //           <button
  //             type="button"
  //             // onClick={handleBackClick}
  //           >
  //             <BiArrowBack />
  //           </button>
  //           <div className="next-button">
  //             <button
  //               type="button"
  //               onClick={handleNavigation}
  //               disabled={
  //                 selectAnswer.filter((todo) => todo.selected).length > 0
  //                   ? false
  //                   : true
  //               }
  //             >
  //               {" "}
  //               Next
  //               <BiRightArrowAlt />
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="progress">
  //         <div className="bar"></div>
  //       </div>
  //     </div>
  //   </div>
  // );
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

  const handleAnswerSelection = (questionIndex, selectedAnswer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = selectedAnswer;
    setAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (
      answers[currentQuestion] === questions[currentQuestion].answer ||
      JSON.stringify(answers[currentQuestion]) ===
        JSON.stringify(questions[currentQuestion].answer)
    ) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);
  // Add quiz questions and answer options here
  return (
    <div>
      <div>
        {showScore ? (
          <div>
            <h2>Quiz Complete!</h2>
            <h3>Your Score: {score}</h3>
          </div>
        ) : (
          <div>
            <h2>Question {currentQuestion + 1}</h2>
            <h3>{questions[currentQuestion].question}</h3>
            {/* {questions[currentQuestion].type === "radio" && (
              <ul>
                {questions[currentQuestion].options.map((option, index) => (
                  <li key={index}>
                    <input
                      type="radio"
                      name={`question${currentQuestion}`}
                      value={option}
                      onChange={() =>
                        handleAnswerSelection(currentQuestion, option)
                      }
                    />
                    {option}
                  </li>
                ))}
              </ul>
            )} */}
            {questions[currentQuestion].type === "checkbox" && (
              <ul>
                {questions[currentQuestion].options.map((option, index) => (
                  <li key={index}>
                    <input
                      type="checkbox"
                      name={`question${currentQuestion}`}
                      value={option}
                      onChange={() =>
                        handleAnswerSelection(currentQuestion, option)
                      }
                    />
                    {option}
                  </li>
                ))}
              </ul>
            )}
            {/* {questions[currentQuestion].type === "input" && (
              <input
                type="text"
                onChange={(e) =>
                  handleAnswerSelection(currentQuestion, e.target.value)
                }
              />
            )}
            {questions[currentQuestion].type === "textarea" && (
              <textarea
                rows="4"
                cols="50"
                onChange={(e) =>
                  handleAnswerSelection(currentQuestion, e.target.value)
                }
              />
            )} */}
            <button onClick={handleNextQuestion}>Next Question</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default QuestionOne;
