// modules
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// components
import Home from "../pages/home/Home.tsx";

describe("<Home />", () => {
  test("Home page was rendered", () => {
    render(<Home />);
    const checkContent = screen.getByText("this is home");
    expect(checkContent).toBeTruthy();
  });
  // context
  test("has context 'Welcom to Warrant's website! Hope you enjoy the time browsing herer!'", () => {
    render(<Home />);
    const checkContent = screen.getByText("this is home");
    expect(checkContent).toBeTruthy();
  });
  // buttons
  test("has button with context 'About Me'", () => {
    render(<Home />);
    const checkContent = screen.getByText("this is home");
    expect(checkContent).toBeTruthy();
  });
  test("has button with context 'Majority In School'", () => {
    render(<Home />);
    const checkContent = screen.getByText("this is home");
    expect(checkContent).toBeTruthy();
  });
  test("has button with context 'Other Experience'", () => {
    render(<Home />);
    const checkContent = screen.getByText("this is home");
    expect(checkContent).toBeTruthy();
  });
  test("has button with context 'My Hobbies'", () => {
    render(<Home />);
    const checkContent = screen.getByText("this is home");
    expect(checkContent).toBeTruthy();
  });
  test("has button with context 'Contact With Me'", () => {
    render(<Home />);
    const checkContent = screen.getByText("this is home");
    expect(checkContent).toBeTruthy();
  });
});
