import React, { FC, useState, useRef } from "react";
import { IChoice, IQuestion } from "../types/types";
import QuestionItem from "./QuestionItem";

const QuestionsList: FC<IQuestion[]> = ({
  questions,
  userChoices,
  setUserChoices,
  questionRefs,
}) => {
  const handleNext = (id) => {
    questionRefs.current[id + 1].scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  const handlePrev = (id) => {
    questionRefs.current[id - 1].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="questions-list">
      {questions.map((question: IQuestion, i) => {
        return (
          <QuestionItem
            i={i}
            ref={questionRefs}
            key={question.id}
            id={question.id}
            text={question.text}
            choices={question.choices}
            userChoices={userChoices}
            setUserChoices={setUserChoices}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );
      })}
    </div>
  );
};

export default QuestionsList;
