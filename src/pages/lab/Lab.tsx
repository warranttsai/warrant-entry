// module
import { useNavigate } from "react-router-dom";
import { Button, Divider } from "@mui/material";
// styled-components
import {
  BlackCenterTitle,
  WhiteCenterTitle,
} from "../../components/styled-component/Title";
import { BlackBackgroundContainer } from "../../components/styled-component/Container";
import { ObjectOrientation } from "../../components/software-engineer-note/ObjectOrientation";
import {
  DrawImageForFrontEndDesign,
  EncapsulateYourStyleSheet,
} from "../../components/software-engineer-note/FrontEndDesign";

export default function Lab() {
  const navigate = useNavigate();

  return (
    <>
      {/* About this web application */}
      <div style={{ marginBlock: 10 }}>
        <Button onClick={() => navigate("/lab/about-this-web-app")}>
          <BlackCenterTitle style={{ fontSize: 30 }}>
            📚 Something About This Web Application 📚
          </BlackCenterTitle>
        </Button>
      </div>
      <Divider
        style={{
          width: "90%",
          marginInline: "auto",
        }}
      />
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
      <br />
      <br />
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
