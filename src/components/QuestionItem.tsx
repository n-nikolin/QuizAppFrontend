import React, { FC, useState, forwardRef } from "react";
import { IQuestion } from "../types/types";
import { IChoice } from "../types/types";

const QuestionItem: FC<IQuestion> = forwardRef(
  (
    {
      id,
      text,
      choices,
      userChoices,
      setUserChoices,
      i,
      handleNext,
      handlePrev,
    },
    ref
  ) => {
    return (
      <div
        key={id}
        className="questions-item"
        ref={(el) => (ref.current = [...ref.current, el])}
      >
        <h3>{text}</h3>
        <div>
          {/* <ChoicesList choices={question.choices} /> */}
          <div className="choices-list">
            {choices.map((choice: IChoice) => {
              return (
                // choice item
                <li className="choices-list-item" key={choice.id}>
                  <input
                    type="radio"
                    name={"question-" + id}
                    value={choice.value}
                    id={choice.id + "-choice"}
                    onChange={() => {
                      setUserChoices((userChoices) => ({
                        ...userChoices,
                        [id]: {
                          value: choice.value,
                          q_id: id,
                          c_id: choice.id,
                        },
                      }));
                      console.log(userChoices);
                    }}
                    required //needs to be custom
                  />
                  <label htmlFor={choice.id + "-choice"}>{choice.text}</label>
                </li>
              );
            })}
          </div>
          {/* 
          consitional logic for buttons
          no PREVIOUS button on first question,
          instead of  NEXT button on last question render SUBMIT button
          */}
        </div>
      </div>
    );
  }
);

export default QuestionItem;
