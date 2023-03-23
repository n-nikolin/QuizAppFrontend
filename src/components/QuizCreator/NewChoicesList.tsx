import React, { FC } from "react";
import { BsPlusLg } from "react-icons/bs";
import { IQuestion, IQuiz } from "../../types/types";

type NewChoicesListProps = {
  question: IQuestion;
  newQuiz: IQuiz;
  setNewQuiz: React.Dispatch<React.SetStateAction<IQuiz>>;
  i: number;
};

const NewChoicesList: FC<NewChoicesListProps> = ({
  question,
  newQuiz,
  setNewQuiz,
  i,
}) => {
  const handleChoicesChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number,
    j: number
  ) => {
    let temp = { ...newQuiz };
    temp.questions[i].choices[j][e.target.name] = e.target.value;
    setNewQuiz(temp);
  };
  const addChoice = (e: React.MouseEvent<HTMLButtonElement>, i: number) => {
    e.preventDefault();
    let temp = { ...newQuiz };
    temp.questions[i].choices.push({ text: "", value: 0 });
    setNewQuiz(temp);
  };
  const deleteChoice = (
    e: React.MouseEvent<HTMLButtonElement>,
    i: number,
    j: number
  ) => {
    e.preventDefault();
    let temp = { ...newQuiz };
    temp.questions[i].choices.splice(j, 1);
    setNewQuiz(temp);
  };

  return (
    <div className="choices-list">
      <h3>Choices</h3>
      <ul>
        {question.choices.map((choice, j) => (
          <li key={"choice_" + j}>
            <label htmlFor="">text: </label>{" "}
            <input
              type="text"
              name="text"
              value={newQuiz.questions[i].choices[j].text}
              onChange={(e) => handleChoicesChange(e, i, j)}
            />
            <label htmlFor="">value:</label>
            <input
              type="text"
              name="value"
              value={newQuiz.questions[i].choices[j].value}
              onChange={(e) => handleChoicesChange(e, i, j)}
            />
            <button onClick={(e) => deleteChoice(e, i, j)}>X</button>
          </li>
        ))}
      </ul>
      <button className="add-new-choice" onClick={(e) => addChoice(e, i)}>
        <BsPlusLg />
        <label htmlFor="">add new choice</label>
      </button>
    </div>
  );
};

export default NewChoicesList;
