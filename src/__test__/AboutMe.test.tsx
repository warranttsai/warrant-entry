// modules
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
// components
import AboutMe from "../pages/about-me/AboutMe.tsx";

describe("<AboutMe />", () => {
  test("has title 'Introduction'", () => {
    render(
      <Router>
        <AboutMe />
      </Router>
    );
    const checkContent = screen.getByTestId("intro-title");
    expect(checkContent.textContent).toContain("Introduction");
  });
});
