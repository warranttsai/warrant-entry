// module
import { useNavigate } from "react-router-dom";
import { Button, Divider } from "@mui/material";
// styled-components
import { BlackCenterTitle } from "../../components/styled-component/Title";
import { LabSection } from "../../components/styled-component/Container";

export default function Lab() {
  const navigate = useNavigate();

  return (
    <>
      {/* About this web application */}
      <LabSection>
        <Button onClick={() => navigate("/lab/about-this-web-app")}>
          <h1
            className="hyper-link-style"
            style={{ fontSize: "2rem", color: "blue", textAlign: "center" }}
          >
            📚 Something About This Web Application 📚
          </h1>
        </Button>
      </LabSection>
      <Divider
        style={{
          width: "90%",
          marginInline: "auto",
        }}
      />
      {/* My Coding Bible */}
      <LabSection>
        <Button onClick={() => navigate("/lab/my-coding-bible")}>
          <h1
            className="hyper-link-style"
            style={{ fontSize: "2rem", color: "blue", textAlign: "center" }}
          >
            🧑‍💻 My Coding Bible
          </h1>
        </Button>
      </LabSection>
      <Divider
        style={{
          width: "90%",
          marginInline: "auto",
        }}
      />
      {/* React Challenges */}
      <LabSection>
        <a
          href="https://www.codevertiser.com/free-reactjs-coding-challenges-for-responsive-UI/"
          target="_blank"
        >
          <h1
            className="hyper-link-style"
            style={{ fontSize: "2rem", color: "blue", textAlign: "center" }}
          >
            React Challenge ➤
          </h1>
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
      </LabSection>
    </>
  );
}
