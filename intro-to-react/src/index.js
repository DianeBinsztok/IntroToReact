import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const questions = [
  {
    title: "first question",
    options: ["salut", "hello", "random", "hi", "stuff"],
    correct: "hello",
    answer: "The answer is: hello. He's an explanation why...",
  },
  {
    title: "first question",
    options: ["titi", "tata", "toto", "tutu", "fifou"],
    correct: "fifou",
    answer: "The answer is: fifou. He's an explanation why...",
  },
  {
    title: "third question",
    options: ["blabla", "blabla", "blublu", "blabli", "blubla"],
    correct: "blabli",
    answer: "The answer is: blabli. He's an explanation why...",
  },
  {
    title: "fourth question",
    options: ["salut", "hello", "random", "hi", "stuff"],
    correct: "hello",
    answer: "The answer is: hello. He's an explanation why...",
  },
];

console.log(questions[0].correct);

// Components:

class Cards extends React.Component {}

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <h3>{questions[0].title}</h3>
        <ul>
          <li>
            <input
              type="checkbox"
              name={questions[0].options[0]}
              className="wrong"
            />
            <label htmlFor={questions[0].options[0]}>
              {questions[0].options[0]}
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name={questions[0].options[1]}
              className="correct"
            />
            <label htmlFor={questions[0].options[1]}>
              {questions[0].options[1]}
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name={questions[0].options[2]}
              className="wrong"
            />
            <label htmlFor={questions[0].options[2]}>
              {questions[0].options[2]}
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name={questions[0].options[3]}
              className="wrong"
            />
            <label htmlFor={questions[0].options[3]}>
              {questions[0].options[3]}
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="{questions[0].options[4]}"
              className="wrong"
            />
            <label htmlFor="{questions[0].options[4]}">
              {questions[0].options[4]}
            </label>
          </li>
        </ul>
        <p className="answer hidden">{questions[0].answer}</p>
        <input className="submit" type="submit" value="submit" />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Card />, document.getElementById("root"));
