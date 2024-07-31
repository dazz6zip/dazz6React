import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Calc from "./test/Calc";
import Jikwon from "./test/Jikwon";

function App() {
  return (
    <Router>
      <div className="App">
        <h2 className="title">🔗 메인</h2>
        <nav>
          <Link to="/">구구단 계산기</Link> |{" "}
          <Link to="/jikwon">직원 정보</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Calc />}></Route>
          <Route path="/jikwon" element={<Jikwon />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
