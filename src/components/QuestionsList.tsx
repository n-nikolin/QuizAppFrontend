import React, { FC, useState } from "react";
import { IChoice, IQuestion } from "../types/types";
import QuestionItem from "./QuestionItem";

const QuestionsList: FC<IQuestion[]> = ({
  questions,
  userChoices,
  setUserChoices,
}) => {
  return (
    <div className="questions-list">
      {questions.map((question: IQuestion) => {
        return (
          <QuestionItem
            key={question.id}
            id={question.id}
            text={question.text}
            choices={question.choices}
            userChoices={userChoices}
            setUserChoices={setUserChoices}
          />
        );
      })}
    </div>
  );
};

export default QuestionsList;
