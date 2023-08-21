// module
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
// styled-components
import {
  BlackCenterTitle,
  WhiteCenterTitle,
} from "../../components/styled-component/Title";
import { BlackBackgroundContainer } from "../../components/styled-component/Container";
import { ObjectOrientation } from "../../components/software-engineer-note/objectOrientation";
import {
  DrawImageForFrontEndDesign,
  EncapsulateYourStyleSheet,
} from "../../components/software-engineer-note/FrontEndDesign";

export default function Lab() {
  const navigate = useNavigate();

  return (
    <>
      {/* React Challenges */}
      <div>
        <a
          href="https://www.codevertiser.com/free-reactjs-coding-challenges-for-responsive-UI/"
          target="_blank"
        >
          <BlackCenterTitle>React Challenge ➤</BlackCenterTitle>
        </a>
        <Button onClick={() => navigate("/lab/react-challenge-1")}>
          challenge #1
        </Button>
        <Button onClick={() => navigate("/lab/react-challenge-2")}>
          challenge #2
        </Button>
        <Button onClick={() => navigate("/lab/react-challenge-3")}>
          challenge #3
        </Button>
        <Button onClick={() => navigate("/lab/react-challenge-4")}>
          challenge #4
        </Button>
      </div>
      {/* Software Engineer Note */}
      <BlackBackgroundContainer>
        <WhiteCenterTitle>Software Engineer Note</WhiteCenterTitle>
        <div style={{ paddingInline: 200 }}>
          <span>
            This section is my note for software engineer experience. Creating a
            simple documentation here as my engineering bible.
            <p style={{ color: "red" }}>
              Note: These are all from my understanding. It might be slightly
              different from general definition.{" "}
            </p>
          </span>
        </div>
        <br />
        <DrawImageForFrontEndDesign />
        <EncapsulateYourStyleSheet />
        <ObjectOrientation />
      </BlackBackgroundContainer>
    </>
  );
}
