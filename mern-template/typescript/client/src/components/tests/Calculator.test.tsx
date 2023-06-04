import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Calculator } from "../Calculator";

describe("Calcalator component", () => {
  it("renders a calculator", () => {
    render(<Calculator />);
    expect(screen.getByTestId("result")).toBeInTheDocument();
    expect(screen.getByTestId("num1")).toBeInTheDocument();
    expect(screen.getByTestId("num2")).toBeInTheDocument();
    expect(screen.getByTestId("add")).toBeInTheDocument();
  });

  it("should add numbers", () => {
    render(<Calculator />);
    const num1input = screen.getByTestId("num1");
    const num2input = screen.getByTestId("num2");
    const addButton = screen.getByTestId("add");
    const resultArea = screen.getByTestId("result");

    fireEvent.change(num1input, { target: { value: 5 } });
    fireEvent.change(num2input, { target: { value: 8 } });
    fireEvent.click(addButton);
    expect(resultArea).toHaveTextContent("13");
  });
});
