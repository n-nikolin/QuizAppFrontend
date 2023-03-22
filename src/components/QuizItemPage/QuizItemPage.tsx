import React, { FC, useEffect, useRef, useState } from "react";
import axios from "axios";
import { IQuestion, IQuiz } from "../../types/types";
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
  const questionRefs = useRef([]);

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
    // console.log(questionRefs.current)
  }, []);

  const handleStartQuiz = (e) => {
    e.preventDefault();
    questionRefs.current[0].scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline:'nearest'
    });
  };

  return (
    <section className="quiz-item page">
      <form
        action="submit"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(userChoices);
          // getResult();
          navigate("results", { state: { userChoices, quiz_id: quiz.id } });
        }}
      >
        <div className="quiz-form-container">
          <div className="quiz-item-legend">
            <h3>{quiz.title}</h3>
            <p>{quiz.description}</p>
            <div className="quiz-item-date">
              <label htmlFor="">
                Posted:
                <span>{new Date(quiz.created).toLocaleString()}</span>
              </label>
              <label htmlFor="">Edited: </label>
              <span>{new Date(quiz.edited).toLocaleString()}</span>
            </div>
            <button className="start-quiz" onClick={handleStartQuiz}>
              START QUIZ
            </button>
          </div>
          <QuestionsList
            questions={questions}
            userChoices={userChoices}
            setUserChoices={setUserChoices}
            questionRefs={questionRefs}
          />
        </div>
      </form>
    </section>
  );
};

export default QuizItemPage;
