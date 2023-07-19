// modules
import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
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
  test("has button 'linedin-button'", () => {
    render(
      <Router>
        <AboutMe />
      </Router>
    );

    // Find the button element using its data-testid
    const button = screen.getByTestId("instagram-button");
    // Mock the window.open method
    const originalOpen = window.open;
    window.open = jest.fn();
    // Simulate a click on the button
    fireEvent.click(button);
    // Restore the original window.open method
    window.open = originalOpen;

    // Check if window.open was called with the expected URL
    expect(window.open).toHaveBeenCalledWith(
      "https://www.instagram.com/warrant_job_hunting/",
      "_blank"
    );
  });
  test("has button 'instagram-button'", () => {
    render(
      <Router>
        <AboutMe />
      </Router>
    );

    const checkLink = screen.getByTestId("instagram-button");
    const hrefValue = checkLink.getAttribute("href");
    const expectedHref = "https://www.instagram.com/warrant_job_hunting/";
    expect(hrefValue).toBe(expectedHref);
  });
  test("has button 'facebook-button'", () => {
    render(
      <Router>
        <AboutMe />
      </Router>
    );
    const checkLink = screen.getByTestId("facebook-button");
    const hrefValue = checkLink.getAttribute("href");
    const expectedHref =
      "https://www.facebook.com/profile.php?id=100007257571234";
    expect(hrefValue).toBe(expectedHref);
  });
});
