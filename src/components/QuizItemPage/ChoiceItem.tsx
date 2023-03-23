import React, { FC } from "react";
import { IChoice } from "../../types/types";

type ChoiceItemProps = {
  id: number;
  choice: IChoice;
  userChoices: {};
  setUserChoices: React.Dispatch<React.SetStateAction<{}>>;
};

const ChoiceItem: FC<ChoiceItemProps> = ({
  id,
  choice,
  userChoices,
  setUserChoices,
}) => {
  return (
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
};

export default ChoiceItem;
