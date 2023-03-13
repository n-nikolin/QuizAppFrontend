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
    {
      text: "is this thing running properly?",
      choices: [
        { text: "yes!", value: 1 },
        { text: "no!", value: 0 },
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

  const handleQuizChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setNewQuiz({ ...newQuiz, [e.target.name]: e.target.value });
  };

  const handleQuestionChange = (e, i) => {
    let temp = { ...newQuiz };
    temp.questions[i][e.target.name] = e.target.value;
    setNewQuiz(temp);
  };

  const handleChoicesChange = (e, i, j) => {
    let temp = { ...newQuiz };
    temp.questions[i].choices[j][e.target.name] = e.target.value;
    setNewQuiz(temp);
  };

  const handleResultsChange = (e, i) => {
    let temp = { ...newQuiz };
    temp.results[i][e.target.name] = e.target.value;
    setNewQuiz(temp);
  };

  return (
    <section className="quiz-creator">
      <form action="submit" className="quiz-creator-form">
        <div>
          <label htmlFor="quizTitle" className="new-quiz-title">
            <h3>Quiz Title</h3>
          </label>
          <input
            type="text"
            name="title"
            value={newQuiz.title}
            placeholder="quiz title"
            onChange={handleQuizChange}
          />
        </div>
        <div>
          <label htmlFor="" className="new-quiz-description">
            <h3>Description</h3>
          </label>
          <textarea
            name="description"
            value={newQuiz.description}
            onChange={handleQuizChange}
          />
        </div>
        <div>
          <label htmlFor="" className="new-quiz-description">
            <h3>Questions</h3>
          </label>
          {newQuiz.questions.map((question, i) => (
            <div key={"question_" + i}>
              <label htmlFor="">
                <h4>{i + 1}</h4>
              </label>
              <textarea
                name="text"
                value={newQuiz.questions[i].text}
                onChange={(e) => handleQuestionChange(e, i)}
              />
              <h3>Choices</h3>
              <div className="choices-list">
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
                      {/* {choice.text} */}
                      <label htmlFor="">value:</label>{" "}
                      <input
                        type="text"
                        name="value"
                        value={newQuiz.questions[i].choices[j].value}
                        onChange={(e) => handleChoicesChange(e, i, j)}
                      />{" "}
                      {/* {choice.value} */}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button className="add-new-question">
            <BsPlusLg />
            <label htmlFor="">add new question</label>
          </button>
          <div className="quiz-results">
            <h3>Results</h3>
            <div className="quiz-results-list">
              <ul>
                {newQuiz.results.map((result, i) => {
                  return (
                    <li key={"result_" + i}>
                      <label htmlFor="">text</label>
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
                    </li>
                  );
                })}
              </ul>
            </div>
            <button className="add-new-question">
              <BsPlusLg />
              <label htmlFor="">add results</label>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default QuizCreator;
