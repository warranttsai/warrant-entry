// modules
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
// components
import AboutMe from "../pages/about-me/AboutMe.tsx";

describe("<AboutMe />", () => {
  test("has section and title as 'Introduction'", () => {
    render(
      <Router>
        <AboutMe />
      </Router>
    );
    const checkContent = screen.getByTestId("intro-title");
    expect(checkContent.textContent).toContain("Introduction");
  });
  test("has section 'My Social Media'", () => {
    render(
      <Router>
        <AboutMe />
      </Router>
    );
    const checkContent = screen.getByTestId("my-social-media");
    expect(checkContent.textContent).toContain("My Social Media");
  });
  test("has section 'Introduction Content'", () => {
    render(
      <Router>
        <AboutMe />
      </Router>
    );
    const checkContent = screen.getByTestId("introduction-content");
    const expoectContent = `My name is Warrant TSAI, the 2023 graduate of Master of Information Technology from RMIT. I was growing up in Taiwan (the R.O.C.) and moving to Melbourne Australia since June 2020. As a Information Technology student, my majorities are covering across different program languages especially for website development. Apart from it, I'm also a street dancer. I had learned Popping dance for 7 years and a beginner of Hip-hop and House dance. In 2023, I was taking the role to be the secretary of student dancing club in RMIT which named "Funkdelics".`;
    expect(checkContent.textContent).toContain(expoectContent);
  });
});
