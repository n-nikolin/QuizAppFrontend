import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import QuizItem from "./QuizItem";
import { IQuiz } from "../../types/types";

const QuizList: FC<IQuiz[]> = () => {
  const [quizList, setQuizList] = useState<IQuiz[]>([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/quizzes/")
      .then((res) => {
        setQuizList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="main">
      <ul className="quiz-list">
        {/* {quizList.map((quiz: IQuiz, index: number) => { */}
        {quizList.map((quiz, index) => {
          return (
            <QuizItem
              quiz={quiz}
              index={index}
              key={`quiz-item-${index}`}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default QuizList;
