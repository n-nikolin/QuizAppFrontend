import React, { useState } from "react";
import axios from "axios";
import { BsPlusLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

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
  const [newQuiz, setNewQuiz] = useState(initialValue);
  const navigate = useNavigate();

  const handleQuizChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewQuiz({ ...newQuiz, [e.target.name]: e.target.value });
  };

  const handleQuestionChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    i: number
  ) => {
    let temp = { ...newQuiz };
    temp.questions[i][e.target.name] = e.target.value;
    setNewQuiz(temp);
  };

  const handleChoicesChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number,
    j: number
  ) => {
    let temp = { ...newQuiz };
    temp.questions[i].choices[j][e.target.name] = e.target.value;
    setNewQuiz(temp);
  };

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

  const addChoice = (e: React.MouseEvent<HTMLButtonElement>, i: number) => {
    e.preventDefault();
    let temp = { ...newQuiz };
    temp.questions[i].choices.push({ text: "", value: 0 });
    setNewQuiz(temp);
  };

  const deleteChoice = (
    e: React.MouseEvent<HTMLButtonElement>,
    i: number,
    j: number
  ) => {
    e.preventDefault();
    let temp = { ...newQuiz };
    temp.questions[i].choices.splice(j, 1);
    setNewQuiz(temp);
  };

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
        <br />
        <div>
          <label htmlFor="" className="new-quiz-description">
            <h3>Questions</h3>
          </label>
          {newQuiz.questions.map((question, i) => (
            <div key={"question_" + i}>
              <br />
              <label htmlFor="">
                <h4>{i + 1}</h4>
              </label>
              <textarea
                name="text"
                value={newQuiz.questions[i].text}
                onChange={(e) => handleQuestionChange(e, i)}
              />
              <button onClick={(e) => deleteQuestion(e, i)}>X</button>
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
                      <label htmlFor="">value:</label>
                      <input
                        type="text"
                        name="value"
                        value={newQuiz.questions[i].choices[j].value}
                        onChange={(e) => handleChoicesChange(e, i, j)}
                      />
                      <button onClick={(e) => deleteChoice(e, i, j)}>X</button>
                    </li>
                  ))}
                </ul>
                <button
                  className="add-new-choice"
                  onClick={(e) => addChoice(e, i)}
                >
                  <BsPlusLg />
                  <label htmlFor="">add new choice</label>
                </button>
              </div>
            </div>
          ))}
          <br />
        </div>
        <div>
          <button className="add-new-question" onClick={addQuestion}>
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
        </div>
        <button type="submit">Create New Quiz</button>
      </form>
    </section>
  );
};

export default QuizCreator;
