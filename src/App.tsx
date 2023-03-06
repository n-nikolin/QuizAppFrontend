import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import QuizList from "./components/QuizList";
import QuizCreator from "./components/QuizCreator";
import QuizItemPage from "./components/QuizItemPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<QuizList />} />
            <Route path="/quizes">
              <Route path="new" element={<QuizCreator />} />
              <Route path=":id" element={<QuizItemPage />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
