import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "../views/auth/login";

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
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
