import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import QuizList from "../IndexPage/QuizList";
import QuizCreator from "../QuizCreator/QuizCreator";
import QuizItemPage from "../QuizItemPage/QuizItemPage";
import QuizResult from "../QuizItemPage/QuizResult";
import QuizCreatedPage from "../QuizCreator/QuizCreatedPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<QuizList />} />
            <Route path="/quizzes">
              <Route path="new" element={<QuizCreator />} />
              <Route path="new/created" element={<QuizCreatedPage />} />
              <Route path=":id" element={<QuizItemPage />} />
              <Route path=":id/results" element={<QuizResult />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
