import { legacy_createStore as createStore } from "redux";

// reducer 함수 : application 상태를 변환하는 함수 (A 상태 -> B 상태)
// state와 action을 전달받아 상태를 변환 후 반환
// reducer 함수가 하는 일
// 1. action 타입 분석
// 2. 이전 상태를 다음 상태로 교체
// 3. 다음 상태 반환

// createStore(reducer 함수)
export default createStore(function (state, action) {
  // state : 데이터
  // action : 데이터에 가해지는 행위

  if (state === undefined) {
    return { number: 0 }; // number 초기화
  }

  if (action.type === "INCREMENT") {
    return { ...state, number: state.number + action.size };
  }

  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());

// lcs(legacy_createStore) 두 번째 매개변수는 REDUX_DEVTOOLS를 사용하기 위한 지정값
