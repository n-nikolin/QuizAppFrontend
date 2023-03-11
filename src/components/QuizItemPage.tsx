import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { IQuestion, IQuiz } from "../types/types";
import { useNavigate, useParams } from "react-router-dom";
import QuestionsList from "./QuestionsList";

interface QuizItemPageParams {
  id: number;
}

const QuizItemPage: FC = () => {
  const [quiz, setQuiz] = useState<IQuiz>({});
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const params = useParams<keyof QuizItemPageParams>();
  const [userChoices, setUserChoices] = useState({});
  const navigate = useNavigate();

  async function fetchData() {
    try {
      const resp = await axios
        .get("http://127.0.0.1:8000/quizzes/" + params.id + "/")
        .then((resp) => {
          setQuiz(resp.data);
          setQuestions(resp.data.questions);
        });
    } catch (err) {
      console.log(err);
    }
  }

  async function getResult() {
    const resp = await axios
      .post("http://127.0.0.1:8000/my_result/", {
        quiz_id: quiz.id,
        choices: Object.values(userChoices),
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="quiz-page">
      <h3>{quiz.title}</h3>
      <p>{quiz.description}</p>
      <span>{quiz.created?.toString() || ""}</span>
      <span>{quiz.edited?.toString() || ""}</span>
      <form
        action="submit"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(userChoices);
          // getResult();
          navigate("results", { state: { userChoices, quiz_id:quiz.id } });
        }}
      >
        <QuestionsList
          questions={questions}
          userChoices={userChoices}
          setUserChoices={setUserChoices}
        />
        {/* submit btn */}
        <button type="submit" className="submit-btn">
          submit
        </button>
      </form>
    </section>
  );
};

export default QuizItemPage;
