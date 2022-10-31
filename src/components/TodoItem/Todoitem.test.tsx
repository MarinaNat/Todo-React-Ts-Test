import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "./TodoItem";
import "@testing-library/jest-dom";

test("renders a items", () => {
  const items = [
    {
      id: 1,
      title: "test",
      complete: false,
    },
  ];
  //   @ts-ignore
  render(<TodoItem items={items} />);
  expect(screen.queryByLabelText("")).toBeInTheDocument();
});

describe("events", () => {
  it("checkbox click", () => {
    const handleChange = jest.fn();
    const { container } = render(
      <input type="checkbox" onChange={handleChange} />
    );
    // @ts-ignore
    const checkbox: Element = container.firstChild;
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });
});
