import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Modal from "react-modal";
import "./Questions.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

let score = 0,
  quesNo = 0,
  counter = 0,
  results,
  message1 = "Well Done!!!",
  message2 = "Very Good!!!",
  message3 = "Sorry you are not eligible for best offer,please try again!!!";
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
const Questions = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(quesAns[quesNo]);
  const [ans, setAns] = useState("");
  const [show, setShow] = useState(false);
  const [result, setResult] = useState(0);
  const [message, setMessage] = useState("");

  const submit = () => {
    // console.log(currentQuestion.correct === ans);
    if (currentQuestion.correct === ans) {
      score += 1;
      //   console.log(score);
    }
    setAns("");

    // console.log(quesNo);

    quesNo += 1;
    if (quesNo === quesAns.length) {
      //   counter += 1;
      results = (score / quesAns.length) * 100;
      console.log(result);
      setTimeout(() => {
        quesNo += 1;
        openModal();
      }, 2000);
    }
    if (quesNo < quesAns.length) {
      setTimeout(() => {
        counter += 1;
        setCurrentQuestion(quesAns[quesNo]);
      }, 2000);
    }
  };
  useEffect(() => {
    setShow(!show);
  }, [counter]);
  useEffect(() => {
    setResult(results);
    if (results === 100) {
      setMessage(message1);
    } else if (results > 60 && results < 80) {
      setMessage(message2);
    } else {
      setMessage(message3);
    }
  }, [results]);
  return (
    <Fragment>
      <div className="questionsContainer">
        {quesNo !== quesAns.length + 1 ? (
          <div className="questionsBox">
            <h3>{currentQuestion.question}</h3>

            <ul className={show === true ? "show" : "hide"}>
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
            <ul className={show === false ? "show" : "hide"}>
              <li
                onClick={() => setAns(currentQuestion.option1)}
                style={
                  currentQuestion.option1 === currentQuestion.correct
                    ? { backgroundColor: "green" }
                    : { backgroundColor: "red" }
                }
              >
                {currentQuestion.option1}
              </li>
              <li
                onClick={() => setAns(currentQuestion.option2)}
                style={
                  currentQuestion.option2 === currentQuestion.correct
                    ? { backgroundColor: "green" }
                    : { backgroundColor: "red" }
                }
              >
                {currentQuestion.option2}
              </li>
              <li
                onClick={() => setAns(currentQuestion.option3)}
                style={
                  currentQuestion.option3 === currentQuestion.correct
                    ? { backgroundColor: "green" }
                    : { backgroundColor: "red" }
                }
              >
                {currentQuestion.option3}
              </li>
              <li
                onClick={() => setAns(currentQuestion.option4)}
                style={
                  currentQuestion.option4 === currentQuestion.correct
                    ? { backgroundColor: "green" }
                    : { backgroundColor: "red" }
                }
              >
                {currentQuestion.option4}
              </li>
            </ul>
            <button
              onClick={() => {
                setShow(!show);
                submit();
              }}
              className={show ? "show" : "hide"}
            >
              Next
            </button>
          </div>
        ) : (
          <div>Hello</div>
        )}

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2
              ref={(_subtitle) => (subtitle = _subtitle)}
              className="text-success"
            >
              Hello
            </h2>
            <button onClick={closeModal} className="btn btn-danger">
              close
            </button>
          </div>

          <h4>{`Score: ${result}%`}</h4>
          <p>{message}</p>
          {message === message3 ? (
            <button className="btn btn-primary">Replay</button>
          ) : (
            <div>
              <p>
                For getting best offers from{" "}
                <h4>UpCloud digital healthcare,</h4>click on the below link
              </p>
              <a href="https://upcloud.com/">https://upcloud.com/</a>
            </div>
          )}
          {/* 
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form> */}
        </Modal>
      </div>
    </Fragment>
  );
};

export default Questions;
