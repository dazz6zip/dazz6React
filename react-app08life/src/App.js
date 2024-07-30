import React from "react";
import Clock01 from "./exam/Clock01";
import Clock02 from "./exam/Clock02";
import Clock03 from "./exam/Clock03";
import MyComponent from "./exam/MyComponent";
import MyComponent2 from "./exam/MyComponent2";
import MyForm from "./exam/MyForm";

function App() {
  return (
    <>
      <h3>
        🔗 Digital Clock <i>~ for React LifeCycle Practice</i>
      </h3>
      <hr />
      <Clock01></Clock01>
      <hr />
      <Clock02></Clock02>
      <hr />
      <Clock03></Clock03>
      <hr />
      <MyComponent name="🍮"></MyComponent>
      <hr />
      <MyComponent2 name="🍥"></MyComponent2>
      <hr />
      <hr />
      <h3>
        🔗 Form 작업 관련 <i>~ 사용자와 웹 페이지 간 상호작용</i>
      </h3>
      <hr />
      <MyForm></MyForm>
    </>
  );
}

export default App;
