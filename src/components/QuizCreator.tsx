import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";

const initialValue = {
  title: "test quiz",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita tempora aspernatur officiis natus exercitationem rem corporis earum dicta beatae doloribus non cum vel sunt assumenda, soluta corrupti suscipit quisquam. Eligendi.",
  questions: [
    {
      text: "is this running properly?",
      choices: [
        { text: "yes", value: 1 },
        { text: "no", value: 0 },
      ],
    },
  ],
  results: [
    { title: "niiice!", description: "hell yeah!", value: 1 },
    { title: "fuck!!!", description: "hell noooo!", value: 0 },
  ],
};

const QuizCreator = () => {
  const [newQuiz, setNewQuiz] = useState(initialValue);

  return (
    <section className="quiz-creator">
      <form action="submit">
        <label htmlFor="quizTitle" className="new-quiz-title">
          Quiz Title
        </label>
        <input
          type="text"
          name="quizTitle"
          value={newQuiz.title}
          placeholder="quiz title"
        />
        <label htmlFor="" className="new-quiz-description">description</label>
        <textarea name="quizDescription" value={newQuiz.description} />
        <div>
          <button className="add-new-question">
            <BsPlusLg />
            <label htmlFor="">add new question</label>
          </button>
        </div>
      </form>
    </section>
  );
};

export default QuizCreator;
