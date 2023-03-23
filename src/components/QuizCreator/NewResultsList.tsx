import React, { FC } from "react";
import { IQuiz } from "../../types/types";
import { BsPlusLg } from "react-icons/bs";

type NewQuestionsListProps = {
  newQuiz: IQuiz;
  setNewQuiz: React.Dispatch<React.SetStateAction<IQuiz>>;
};

const NewResultsList: FC<NewQuestionsListProps> = ({ newQuiz, setNewQuiz }) => {
  const handleResultsChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    i: number
  ) => {
    let temp = { ...newQuiz };
    temp.results[i][e.target.name] = e.target.value;
    setNewQuiz(temp);
  };

  const addNewResult = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let temp = { ...newQuiz };
    temp.results.push({ title: "", description: "", value: 0 });
    setNewQuiz(temp);
  };

  const deleteResult = (e: React.MouseEvent<HTMLButtonElement>, i: number) => {
    e.preventDefault();
    let temp = { ...newQuiz };
    temp.results.splice(i, 1);
    setNewQuiz(temp);
  };
  return (
    <div className="new-quiz-results">
      <h3>Results</h3>
      <div className="new-quiz-results-list">
        <ul>
          {newQuiz.results.map((result, i) => {
            return (
              <li
                key={"result_" + i}
                id={"result_" + i}
                className="new-quiz-result-item"
              >
                <label htmlFor="">title:</label>
                <input
                  type="text"
                  name="title"
                  value={newQuiz.results[i].title}
                  onChange={(e) => handleResultsChange(e, i)}
                />
                <label htmlFor="">description</label>
                <textarea
                  name="description"
                  value={newQuiz.results[i].description}
                  onChange={(e) => handleResultsChange(e, i)}
                ></textarea>
                <label htmlFor="">value:</label>
                <input
                  type="text"
                  name="value"
                  value={newQuiz.results[i].value}
                  onChange={(e) => handleResultsChange(e, i)}
                />
                <button onClick={(e) => deleteResult(e, i)}>X</button>
              </li>
            );
          })}
        </ul>
      </div>
      <button className="add-new-question" onClick={addNewResult}>
        <BsPlusLg />
        <label htmlFor="">add results</label>
      </button>
    </div>
  );
};

export default NewResultsList;
