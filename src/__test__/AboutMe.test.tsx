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
  test("has section 'My Personalities'", () => {
    render(
      <Router>
        <AboutMe />
      </Router>
    );
    const checkContent = screen.getByTestId("my-personalities-section");
    expect(checkContent.textContent).toContain("My Personalities");
  });
  test("has section 'Something I am PROUND OF!'", () => {
    render(
      <Router>
        <AboutMe />
      </Router>
    );
    const checkContent = screen.getByTestId("highlight-title");
    expect(checkContent.textContent).toContain("Something I am PROUND OF!");
  });
  test("has section and title as 'Social Media'", () => {
    render(
      <Router>
        <AboutMe />
      </Router>
    );
    const checkContent = screen.getByTestId("social-media");
    expect(checkContent.textContent).toContain("Social Media");
  });
  test("has button 'my-ins'", () => {
    render(
      <Router>
        <AboutMe />
      </Router>
    );
    const checkLink = screen.getByTestId("ins-button");
    expect(checkLink).toContain(
      "https://www.instagram.com/warrant_job_hunting/"
    );
  });
  test("has button 'my-linkedin'", () => {
    render(
      <Router>
        <AboutMe />
      </Router>
    );
    const checkLink = screen.getByTestId("linedin-button");
    expect(checkLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/warrant-tsai-20463414b/"
    );
  });
  test("has button 'my-facebook'", () => {
    render(
      <Router>
        <AboutMe />
      </Router>
    );
    const checkLink = screen.getByTestId("facebook-button");
    expect(checkLink).toContain(
      "https://www.facebook.com/profile.php?id=100007257571234"
    );
  });
});
