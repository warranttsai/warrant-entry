import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
// components
import LearningPath from "../pages/learning-path/LearningPath";

describe("<Home />", () => {
  test("has section 'Software Engineering/Computer Science'", () => {
    render(
      <Router>
        <LearningPath />
      </Router>
    );
    const checkContent = screen.getByTestId("software-engineering");
    expect(checkContent.textContent).toContain(
      "Software Engineering/Computer Science"
    );
  });
  test("has section 'Street Dancing'", () => {
    render(
      <Router>
        <LearningPath />
      </Router>
    );
    const checkContent = screen.getByTestId("street-dancing");
    expect(checkContent.textContent).toContain("Street Dancing");
  });
});
