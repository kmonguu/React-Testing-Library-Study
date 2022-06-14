/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";

function Counter() {
  const [count, setCount] = useState(0);

  const upCounter = () => {
    setCount(count + 1);
  };
  const downCounter = () => {
    setCount(count - 1);
  };

  return (
    <div css={WrapperCss}>
      <h1>Counter</h1>
      <div css={valueAreaCss}>
        <button onClick={downCounter}>-</button>
        <p>{count}</p>
        <button onClick={upCounter}>+</button>
      </div>
    </div>
  );
}
const WrapperCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const valueAreaCss = css`
  display: flex;
  align-items: center;
  > p {
    font-size: 17px;
    font-weight: 700;
  }

  > button {
    margin: 0 20px;
    width: 25px;
    height: 25px;
  }
`;
export default Counter;
