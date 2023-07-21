// modules
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
// styled component
import { HomeContainer } from "../../components/styled-component/Container";
import { VerticalButtons } from "../../components/styled-component/Button";
import { BrownCenterTitle } from "../../components/styled-component/Title";

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
          data-testid="my-majority"
          sx={{
            ":hover": {
              bgcolor: "#D7F72A",
              color: "black",
            },
            width: "300px",
          }}
          onClick={() => navigate("/my-majority")}
        >
          Learning Path
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
        <Button
          variant="contained"
          data-testid="other-experience"
          sx={{
            ":hover": {
              bgcolor: "#D7F72A",
              color: "black",
            },
            width: "300px",
          }}
          onClick={() => navigate("/other-experience")}
        >
          Other Experience
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
          data-testid="contact-with-me"
          sx={{
            ":hover": {
              bgcolor: "#D7F72A",
              color: "black",
            },
            width: "300px",
          }}
          onClick={() => navigate("/contact-with-me")}
        >
          Contact With Me
        </Button>
      </VerticalButtons>
    </HomeContainer>
  );
}

export default Home;
