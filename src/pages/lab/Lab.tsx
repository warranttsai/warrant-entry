// module
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
// styled-components
import { BlackCenterTitle } from "../../components/styled-component/Title";

export default function Lab() {
  const navigate = useNavigate();

  return (
    <>
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
    </>
  );
}
