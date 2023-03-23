import React, { FC } from "react";
import { IQuiz } from "../../types/types";

type TitleAndDescriptionProps = {
  newQuiz: IQuiz;
  setNewQuiz: React.Dispatch<React.SetStateAction<IQuiz>>;
};

const TitleAndDescription: FC<TitleAndDescriptionProps> = ({
  newQuiz,
  setNewQuiz,
}) => {
  const handleQuizChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewQuiz({ ...newQuiz, [e.target.name]: e.target.value });
  };

  return (
    <div className="title-and-description">
      <label htmlFor="" className="new-quiz-title">
        <h3>Quiz Title</h3>
      </label>
      <input
        type="text"
        name="title"
        value={newQuiz.title}
        placeholder="quiz title"
        onChange={handleQuizChange}
      />
      <label htmlFor="" className="new-quiz-description">
        <h3>Description</h3>
      </label>
      <textarea
        name="description"
        value={newQuiz.description}
        onChange={handleQuizChange}
      />
    </div>
  );
};

export default TitleAndDescription;
