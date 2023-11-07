import React from "react";

interface Props {
  question: string;
}

const Question: React.FC<Props> = ({ question }) => {
  return (
    <div className="single-question">
      <div className="single-question-item">{question}</div>
    </div>
  );
};

export default Question;
