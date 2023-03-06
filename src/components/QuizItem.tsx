import React, { FC } from "react";
import { Link } from "react-router-dom";

const QuizItem: FC = ({ quiz, index }: any) => {
  return (
    <li
      className="quiz-item"
      id={`quiz-item-${index}`}
    >
      <Link to={'/quizes/'+quiz.id}>
      <h3>{quiz.title}</h3>
      </Link>
      <p>{quiz.description}</p>
      <span>{quiz.created}</span>
      <span>{quiz.edited}</span>
    </li>
  );
};

export default QuizItem;
