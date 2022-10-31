import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("render lern react input", () => {
  render(<App />);
  const input = screen.getByText(/todo/i);
  expect(input).toBeInTheDocument();
});

describe("App component", () => {
  it("renders App component", () => {
    render(<App />);
    expect(screen.getByText("todos")).toBeInTheDocument();
  });
  it("renders App title", () => {
    render(<App />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
  it("renders App without items", () => {
    render(<App />);
    expect(screen.queryByRole("list")).toBeNull();
  });
  it("render placeholder", () => {
    render(<App />);
    expect(
      screen.getByPlaceholderText("What needs to be done?")
    ).toBeInTheDocument();
  });
  it("renders welcome message", () => {
    render(<App />);
    expect(screen.getByText("todos")).toBeInTheDocument();
  });
  it("onChange works", () => {
    render(<App />);
    expect(screen.queryByDisplayValue(/React/)).toBeNull();
    userEvent.type(screen.getByRole("textbox"), "React");
    expect(screen.queryByDisplayValue(/React/i)).toBeInTheDocument();
  });
  it("filter is working", () => {
    render(<App />);
  });
});
