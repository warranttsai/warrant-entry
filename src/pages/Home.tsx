// modules
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
// styled component
import { HomeContainer } from "../components/styled-component/Container";
import { VerticalButtons } from "../components/styled-component/Button";
import { BrownCenterTitle } from "../components/styled-component/Title";

function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <BrownCenterTitle data-testid="home-title">
        Greetings! <br />
        Welcome to Warrant's website!
      </BrownCenterTitle>
      <VerticalButtons>
        <Button
          variant="contained"
          data-testid="about-me"
          sx={{
            ":hover": {
              bgcolor: "#D7F72A",
              color: "black",
            },
            width: "300px",
          }}
          onClick={() => navigate("/about-me")}
        >
          About Me
        </Button>
        <Button
          variant="contained"
          data-testid="learning-path"
          sx={{
            ":hover": {
              bgcolor: "#D7F72A",
              color: "black",
            },
            width: "300px",
          }}
          onClick={() => navigate("/learning-path")}
        >
          Learning Path
        </Button>
        <Button
          variant="contained"
          color="success"
          data-testid="learning-path"
          sx={{
            ":hover": {
              bgcolor: "#D7F72A",
              color: "black",
            },
            width: "300px",
          }}
          onClick={() => navigate("/my-side-projects")}
        >
          My Side Projects
        </Button>
        <Button
          variant="contained"
          color="success"
          data-testid="learning-path"
          sx={{
            ":hover": {
              bgcolor: "#D7F72A",
              color: "black",
            },
            width: "300px",
          }}
          onClick={() => navigate("/my-coding-bible")}
        >
          Coding Bible
        </Button>
        <Button
          variant="contained"
          data-testid="laboratory"
          sx={{
            ":hover": {
              bgcolor: "#D7F72A",
              color: "black",
            },
            width: "300px",
          }}
          onClick={() => navigate("/lab")}
        >
          Laboratory
        </Button>

        <Button
          variant="contained"
          data-testid="my-hobbies"
          sx={{
            ":hover": {
              bgcolor: "#D7F72A",
              color: "black",
            },
            width: "300px",
          }}
          onClick={() => navigate("/my-hobbies")}
        >
          My Hobbies
        </Button>
        <Button
          variant="contained"
          data-testid="working-experience"
          sx={{
            ":hover": {
              bgcolor: "#D7F72A",
              color: "black",
            },
            width: "300px",
          }}
          onClick={() => navigate("/working-experience")}
        >
          Working Experience
        </Button>
      </VerticalButtons>
    </HomeContainer>
  );
}

export default Home;
