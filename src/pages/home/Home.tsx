// modules
import { Button } from "@mui/material";
import styled from "styled-components";

function Home() {
  const Container = styled.div`
    padding-inline: 300px;
  `;
  const TitleStyle = styled.h1`
    color: #b48608;
    font-family: "Droid serif", serif;
    font-size: 60px;
    font-weight: 400;
    font-style: italic;
    line-height: 44px;
    margin: 0 0 40px 0;
    text-align: center;
  `;
  const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-inline: 300px;
    gap: 5px;
  `;

  return (
    <Container>
      <TitleStyle data-testid="home-title">
        Greetings! <br />
        Welcome to Warrant's website!
      </TitleStyle>
      <ButtonsContainer>
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
      </ButtonsContainer>
    </Container>
  );
}

export default Home;
