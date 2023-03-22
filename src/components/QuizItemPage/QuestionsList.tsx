import React, { FC, useState, useRef } from "react";
import { IChoice, IQuestion } from "../../types/types";
import QuestionItem from "./QuestionItem";

type QuestionsListProps = {
  questions: IQuestion[];
  userChoices: {};
  setUserChoices: React.Dispatch<React.SetStateAction<{}>>;
  questionRefs: React.MutableRefObject<[]>;
};

const QuestionsList: FC<QuestionsListProps> = ({
  questions,
  userChoices,
  setUserChoices,
  questionRefs,
}) => {
  const handleNext = (id: number) => {
    questionRefs.current[id + 1].scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "start",
    });
  };

  const handlePrev = (id: number) => {
    questionRefs.current[id - 1].scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "end",
    });
  };

  return (
    <div className="questions-list">
      {questions.map((question: IQuestion, i) => {
        return (
          <div>
            <div className="question-counter">
              {i + 1}/{questions.length}
            </div>
            <QuestionItem
              ref={questionRefs}
              key={question.id}
              id={question.id}
              text={question.text}
              choices={question.choices}
              userChoices={userChoices}
              setUserChoices={setUserChoices}
            />
            {i > 0 && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handlePrev(i);
                }}
              >
                prev
              </button>
            )}
            {question.id < questions[questions.length - 1].id ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleNext(i);
                }}
              >
                next
              </button>
            ) : (
              <div className="submit-btn">
                <button type="submit">submit</button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default QuestionsList;
