import React, { useState } from "react";

const Counter = () => {
  // useState를 사용하여 +1, -1 버튼을 눌렀을 때 값이 증가/감소 하는 것이 나타나도록 코드를 수정해주세요!
  const [count, setCount] = useState(0);
  // let count = 0;

  const handleDecrease = () => {
    // count = count - 1;
    setCount(count - 1);
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <p>{count}</p>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={handleIncrease}>+1</button>
      {/* 각 버튼에 onClick 이벤트 핸들러를 부여해서, 버튼이 클릭되었을 때 각 함수가 실행되도록 함 */}
    </div>
  );
};

export default Counter;
