import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("<Counter />", () => {
  it("Counter 컴포넌트의 렌더링 여부", () => {
    render(<Counter />);
    screen.getByText("Counter");
  });

  it("버튼과 숫자가 있는지 확인", () => {
    render(<Counter />);
    screen.getByText("0");
    screen.getByText("+");
    screen.getByText("-");
  });

  it("+ 버튼을 눌렀을 때 Counter가 증가하는지", () => {
    render(<Counter />);

    const counter = screen.getByText("0");
    const PlusButton = screen.getByText("+");

    fireEvent.click(PlusButton);
    fireEvent.click(PlusButton);

    expect(counter.textContent).toBe("2");
  });

  it("- 버튼을 눌렀을 때 Counter가 감소하는지", () => {
    render(<Counter />);
    const counter = screen.getByText("0");
    const MinusButton = screen.getByText("-");

    fireEvent.click(MinusButton);
    fireEvent.click(MinusButton);

    expect(counter.textContent).toBe("-2");
  });
});
