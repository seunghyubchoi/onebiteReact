import { useReducer } from "react";

// reducer = 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.type;
    case "DECREASE":
      return state - action.type;
  }
}

const Exam = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // dispatch 가 호출이 되면 reducer 가 호출이 되고
    // reducer 가 호출이 되면서 action 객체가 매개변수로 전달
    // reducer 가 호출이 되면서 state에는 state의 초기 값인 0 (useReducer 참조)

    // 인수 : 상태가 어떻게 변화되길 원하는지
    // -> 액션 객체
    dispatch({
      // 상태를 어떻게 변화시키길 원하는지 적음
      type: "INCREASE",
      // 얼마나 ?
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
