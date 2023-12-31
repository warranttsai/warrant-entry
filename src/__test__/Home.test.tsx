// modules
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
// components
import Home from "../pages/Home.tsx";

describe("<Home />", () => {
  // context
  test("has context 'Welcome to Warrant's website!'", () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const checkContent = screen.getByTestId("home-title");
    expect(checkContent.textContent).toContain(checkContent);
  });
  // buttons
  test("has button with context 'About Me'", () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const buttonElement = screen.getByTestId("about-me");
    expect(buttonElement.textContent).toContain("About Me");
  });
  test("has button with context 'My Majority'", () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const buttonElement = screen.getByTestId("my-majority");
    expect(buttonElement.textContent).toContain("My Majority");
  });
  test("has button with context 'Working Experience'", () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const buttonElement = screen.getByTestId("working-experience");
    expect(buttonElement.textContent).toContain("Working Experience");
  });
  test("has button with context 'Other Experience'", () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const buttonElement = screen.getByTestId("other-experience");
    expect(buttonElement.textContent).toContain("Other Experience");
  });
  test("has button with context 'My Hobbies'", () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const buttonElement = screen.getByTestId("my-hobbies");
    expect(buttonElement.textContent).toContain("My Hobbies");
  });
  test("has button with context 'Contact With Me'", () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const buttonElement = screen.getByTestId("contact-with-me");
    expect(buttonElement.textContent).toContain("Contact With Me");
  });
});
