import React, { FC, useState } from "react";
import { IQuestion } from "../types/types";
import { IChoice } from "../types/types";

const QuestionItem: FC<IQuestion> = ({
  id,
  text,
  choices,
  userChoices,
  setUserChoices,
}) => {
  return (
    <div key={id} className="questions-item">
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
                      [id]: { value: choice.value, q_id: id, c_id: choice.id }
                    }));
                    console.log(userChoices);
                  }}
                />
                <label htmlFor={choice.id + "-choice"}>{choice.text}</label>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
