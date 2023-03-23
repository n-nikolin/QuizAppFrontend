import React, { FC, useState, forwardRef } from "react";
import { IChoice } from "../../types/types";
import ChoicesList from "./ChoicesList";

type QuestionItemProps = {
  id: number;
  text: string;
  choices: IChoice[];
  userChoices: {};
  setUserChoices: React.Dispatch<React.SetStateAction<{}>>;
};

const QuestionItem: FC<QuestionItemProps> = forwardRef(
  ({ id, text, choices, userChoices, setUserChoices }, ref) => {
    return (
      <div
        key={id}
        className="questions-item"
        ref={(el) => (ref.current = [...ref.current, el])}
      >
        <h3>{text}</h3>
        <ChoicesList
          id={id}
          choices={choices}
          userChoices={userChoices}
          setUserChoices={setUserChoices}
        />
      </div>
    );
  }
);

export default QuestionItem;
