import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Link
import LoginPage from "../views/auth/login";
import Dashboard from "../views/dashboard/dashboard";

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
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
