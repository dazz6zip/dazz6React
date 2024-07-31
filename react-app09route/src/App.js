import React from "react";
import "./App.css";
import Test from "./exam/Test";
import About from "./exam/About";
import Counter from "./exam/Counter";
import Input01 from "./exam/Input01";
import Input02 from "./exam/Input02";
import MultiData from "./exam/MultiData";
import MyAjax from "./exam/MyAjax";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h2>라우트 연습용 메인</h2>

        {/* 메뉴 작성 : 라우팅 연습 */}
        <nav>
          {/* Link는 a tag로 전환 : 요청명 개념 */}
          <Link to="/">Test</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/counter">Counter</Link>
          <br />
          <Link to="/input01">Input01</Link> |{" "}
          <Link to="/input02">Input02</Link> |{" "}
          <Link to="/multidata">MultiData</Link> |{" "}
          <Link to="/myajax">MyAjax</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Test />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          {/* Component에서 동적 라우팅 구현 */}
          <Route path="/input01" element={<Input01 />}></Route>
          <Route path="/input02" element={<Input02 />}></Route>
          <Route path="/multidata" element={<MultiData />}></Route>
          <Route path="/myajax" element={<MyAjax />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
