import React from "react";
import { useLocation } from "react-router-dom";

const QuizCreatedPage = () => {
  // generate link to newly created quiz
  const location = useLocation();
  return (
    <section className="quiz-created">
      <div>
        <h1>Quiz Successfully Created!</h1>
        <h2>Title</h2>
        <p>
          URL_to_quiz:{" "}
          <a href={`http://localhost:5173/quizzes/${location.state.quiz_id}`}>
            {location.state.title}
          </a>
        </p>
      </div>
    </section>
  );
};

export default QuizCreatedPage;
