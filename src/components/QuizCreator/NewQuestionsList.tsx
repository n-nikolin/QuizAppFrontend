import React, { FC } from "react";
import { BsPlusLg } from "react-icons/bs";
import { IQuiz } from "../../types/types";
import NewChoicesList from "./NewChoicesList";

type NewQuestionsListProps = {
  newQuiz: IQuiz;
  setNewQuiz: React.Dispatch<React.SetStateAction<IQuiz>>;
};

const NewQuestionsList: FC<NewQuestionsListProps> = ({
  newQuiz,
  setNewQuiz,
}) => {
  const handleQuestionChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    i: number
  ) => {
    let temp = { ...newQuiz };
    temp.questions[i][e.target.name] = e.target.value;
    setNewQuiz(temp);
  };
  const addQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let temp = { ...newQuiz };
    temp.questions.push({
      text: "",
      choices: [
        { text: "", value: 0 },
        { text: "", value: 0 },
      ],
    });
    setNewQuiz(temp);
  };
  const deleteQuestion = (
    e: React.MouseEvent<HTMLButtonElement>,
    i: number
  ) => {
    e.preventDefault();
    let temp = { ...newQuiz };
    temp.questions.splice(i, 1);
    setNewQuiz(temp);
  };
  return (
    <div className="new-quiz-questions-list">
      <label htmlFor="">
        <h3>Questions</h3>
      </label>
      {newQuiz.questions.map((question, i) => (
        <div key={"question_" + i} id={"question_" + i} className="new-quiz-question-item">
          <br />
          <label htmlFor="">
            <h4>{i + 1}</h4>
          </label>
          <textarea
            name="text"
            value={newQuiz.questions[i].text}
            onChange={(e) => handleQuestionChange(e, i)}
          />
          <NewChoicesList
            question={question}
            newQuiz={newQuiz}
            setNewQuiz={setNewQuiz}
            i={i}
          />
          <button onClick={(e) => deleteQuestion(e, i)}>X</button>
        </div>
      ))}
      <button className="add-new-question" onClick={addQuestion}>
        <BsPlusLg />
        <label htmlFor="">add new question</label>
      </button>
      <br />
    </div>
  );
};

export default NewQuestionsList;
