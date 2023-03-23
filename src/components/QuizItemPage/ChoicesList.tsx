import React, { FC, useState } from "react";
import { IChoice } from "../../types/types";
import ChoiceItem from "./ChoiceItem";

type ChoicesListProps = {
  id: number;
  choices: IChoice[];
  userChoices: {};
  setUserChoices: React.Dispatch<React.SetStateAction<{}>>;
};

const ChoicesList: FC<ChoicesListProps> = ({
  id,
  choices,
  userChoices,
  setUserChoices,
}) => {
  return (
    <div className="choices-list">
      {choices.map((choice: IChoice) => {
        return (
          // choice item
          <ChoiceItem
            id={id}
            choice={choice}
            userChoices={userChoices}
            setUserChoices={setUserChoices}
          />
        );
      })}
    </div>
  );
};

export default ChoicesList;
