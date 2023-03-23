import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TitleAndDescription from "./TitleAndDescription";
import { IQuiz } from "../../types/types";
import NewResultsList from "./NewResultsList";
import NewQuestionsList from "./NewQuestionsList";

const initialValue = {
  title: "",
  description: "",
  questions: [
    {
      text: "",
      choices: [
        { text: "", value: 1 },
        { text: "", value: 0 },
      ],
    },
    {
      text: "",
      choices: [
        { text: "", value: 1 },
        { text: "", value: 0 },
      ],
    },
  ],
  results: [
    { title: "", description: "", value: 1 },
    { title: "", description: "", value: 0 },
  ],
};

const QuizCreator = () => {
  const [newQuiz, setNewQuiz] = useState<IQuiz>(initialValue);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/quizzes/",
        newQuiz
      );
      navigate("created", {
        state: { title: newQuiz.title, quiz_id: response.data.id },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="quiz-creator">
      <form
        action="submit"
        className="quiz-creator-form"
        onSubmit={handleSubmit}
      >
        <TitleAndDescription newQuiz={newQuiz} setNewQuiz={setNewQuiz} />
        <br />
        <NewQuestionsList newQuiz={newQuiz} setNewQuiz={setNewQuiz} />
        <br />
        <NewResultsList newQuiz={newQuiz} setNewQuiz={setNewQuiz} />
        <button type="submit">Create New Quiz</button>
      </form>
    </section>
  );
};

export default QuizCreator;
