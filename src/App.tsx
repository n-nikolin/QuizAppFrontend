import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import QuizList from "./components/QuizList";
import QuizCreator from "./components/QuizCreator";
import QuizItemPage from "./components/QuizItemPage";
import QuizResult from "./components/QuizResult";
import QuizCreatedPage from "./components/QuizCreatedPage";

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
              <Route path=":id/results" element={<QuizResult/>} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
