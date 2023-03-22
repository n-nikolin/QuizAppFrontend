import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const QuizResult = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  async function getResults() {
    const resp = await axios
      .post("http://127.0.0.1:8000/my_result/", {
        quiz_id: location.state.quiz_id,
        choices: Object.values(location.state.userChoices),
      })
      .then((response) => {
        // console.log(response.data);
        setResults(response.data);
        console.log(results);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getResults();
  }, []);

  return (
    <section className="quiz-results">
      {results.map((result) => {
        return (
          <div className="quiz-results-item" key={result.id}>
            <h1>{result.title}</h1>
            <p>{result.description}</p>
          </div>
        );
      })}{" "}
    </section>
  );
};

export default QuizResult;
