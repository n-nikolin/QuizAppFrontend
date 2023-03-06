import React, { FC, useState } from "react";
import { IChoice } from "../types/types";

const ChoicesList: FC<IChoice[]> = ({ choices }) => {
  const [isChecked, setIsChecked] = useState(null);
  const selectChoice = (e) => {
    setIsChecked(e.taget.value);
  };
  return (
    <div className="choices-list">
      {choices.map((choice: IChoice) => {
        return (
          <li className="choices-list-item" key={choice.id}>
            <input
              type="radio"
              // name should be for QUESTION, not for choice
              name={choice.id + "-choice"}
              id={choice.id + "-choice"}
            />
            <label htmlFor={choice.id + "-choice"}>{choice.text}</label>
          </li>
        );
      })}
    </div>
  );
};

export default ChoicesList;
