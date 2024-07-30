import React from "react";
import "./App.css";
import Test from "./exam/Test";
import About from "./exam/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h2>라우트 연습용 메인</h2>

        {/* 메뉴 작성 : 라우팅 연습 */}
        <nav>
          {/* Link는 a tag로 전환 : 요청명 개념 */}
          <Link to="/">Test</Link> | <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Test />}></Route>
          <Route path="/about" element={<About />}></Route>
          {/* Component에서 동적 라우팅 구현 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
