import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import "./App.css";
import Questions from "./components/Questions";
import Result from "./components/Result.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/questions" element={<Questions />} />
        <Route exact path="/result/:score" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
