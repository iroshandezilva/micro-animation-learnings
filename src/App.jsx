import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Exp1 from "./pages/Exp1";
import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <ul>
                <li>
                  <Link to="/exp1">Exp1</Link>
                </li>
              </ul>
            </div>
          }
        />
        <Route path="/exp1" element={<Exp1 />} />
      </Routes>
    </Router>
  );
}

export default App;
