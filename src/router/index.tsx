import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Link
import LoginPage from "../views/auth/login";
import Dashboard from "../views/dashboard/dashboard";
import GetStarted from "../views/smart-builder/get-started";
import QuestionOne from "../views/smart-builder/question-one";
import QuestionTwo from "../views/smart-builder/question-two";
import QuestionThree from "../views/smart-builder/question-three";
import QuestionFour from "../views/smart-builder/question-four";
import QuestionFive from "../views/smart-builder/question-five";

const AppRouter = () => {
  return (
    <Router>
      <div className="App">
        {/* <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul> */}
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/dashboard/smart-builder" element={<GetStarted />}></Route>
          <Route path="/dashboard/smart-builder/question-one" element={<QuestionOne />}></Route>
          <Route path="/dashboard/smart-builder/question-two" element={<QuestionTwo />}></Route>
          <Route path="/dashboard/smart-builder/question-three" element={<QuestionThree />}></Route>
          <Route path="/dashboard/smart-builder/question-four" element={<QuestionFour />}></Route>
          <Route path="/dashboard/smart-builder/question-five" element={<QuestionFive />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
