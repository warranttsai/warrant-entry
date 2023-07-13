// modules
import { Button } from "@mui/material";
// styled component
import { HomeContainer } from "../../components/styled-component/Container";
import { VerticalButtons } from "../../components/styled-component/Button";
import { BrownCenterTitle } from "../../components/styled-component/Title";

function Home() {
  return (
    <HomeContainer>
      <BrownCenterTitle data-testid="home-title">
        Greetings! <br />
        Welcome to Warrant's website!
      </BrownCenterTitle>
      <VerticalButtons>
        <Button variant="contained" data-testid="about-me">
          About Me
        </Button>
        <Button variant="contained" data-testid="my-majority">
          My Majority
        </Button>
        <Button variant="contained" data-testid="working-experience">
          Working Experience
        </Button>
        <Button variant="contained" data-testid="other-experience">
          Other Experience
        </Button>
        <Button variant="contained" data-testid="my-hobbies">
          My Hobbies
        </Button>
        <Button variant="contained" data-testid="contact-with-me">
          Contact With Me
        </Button>
      </VerticalButtons>
    </HomeContainer>
  );
}

export default Home;
