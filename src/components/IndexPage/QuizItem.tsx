import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IQuiz } from "../../types/types";

type QuizItemProps = {
  quiz: IQuiz;
  index: number;
};

const QuizItem: FC<QuizItemProps> = ({ quiz, index }) => {
  return (
    <li className="quiz-item" id={`quiz-item-${index}`}>
      <Link to={"/quizzes/" + quiz.id}>
        <h2>{quiz.title}</h2>
      </Link>
      <p className="description">{quiz.description}</p>
      <div className="quiz-item-date">
        <label htmlFor="">Posted: </label>
        <span>{new Date(quiz.created).toLocaleString()}</span>
        <label htmlFor="">Edited: </label>
        <span>{new Date(quiz.edited).toLocaleString()}</span>
      </div>
    </li>
  );
};

export default QuizItem;
