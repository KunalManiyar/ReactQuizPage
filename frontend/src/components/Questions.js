import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Questions.css";

const Questions = () => {
  const quesAns = [
    {
      question: "What does CPU stand for ?",
      option1: "Computer Personal Unit",
      option2: "Central Process Unit",
      option3: "Central Processing Unit",
      option4: "Central Processor Unit",
      correct: "Central Processing Unit",
    },
    {
      question: "Which is the greatest number ?",
      option1: "1",
      option2: "2",
      option3: "3",
      option4: "4",
      correct: "4",
    },
    {
      question: "What does CPU stand for ?",
      option1: "Computer Personal Unit",
      option2: "Central Process Unit",
      option3: "Central Processing Unit",
      option4: "Central Processor Unit",
      correct: "Central Processing Unit",
    },
    {
      question: "Which is the greatest number ?",
      option1: "1",
      option2: "2",
      option3: "3",
      option4: "4",
      correct: "4",
    },
    {
      question: "What does CPU stand for ?",
      option1: "Computer Personal Unit",
      option2: "Central Process Unit",
      option3: "Central Processing Unit",
      option4: "Central Processor Unit",
      correct: "Central Processing Unit",
    },
  ];
  const navigate = useNavigate();
  const [quesNo, setQuesNo] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(quesAns[quesNo]);
  const [score, setScore] = useState(0);

  const [ans, setAns] = useState("");
  const submit = () => {
    if (currentQuestion.correct === ans) {
      console.log("Kunal");
      setScore(score + 1);
    }
    let num = quesNo + 1;
    console.log(num);
    setQuesNo(num);
    console.log(quesNo);
    setCurrentQuestion(quesAns[quesNo]);
  };

  return (
    <Fragment>
      <div className="questionsContainer">
        <div className="questionsBox">
          <h3>{currentQuestion.question}</h3>

          <ul>
            <li onClick={() => setAns(currentQuestion.option1)}>
              {currentQuestion.option1}
            </li>
            <li onClick={() => setAns(currentQuestion.option2)}>
              {currentQuestion.option2}
            </li>
            <li onClick={() => setAns(currentQuestion.option3)}>
              {currentQuestion.option3}
            </li>
            <li onClick={() => setAns(currentQuestion.option4)}>
              {currentQuestion.option4}
            </li>
          </ul>
          <button onClick={() => submit()}>Next</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Questions;
