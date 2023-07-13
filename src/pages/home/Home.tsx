import { Button } from "@mui/material";

function Home() {
  return (
    <>
      <div data-testid="home-title">
        Welcome to Warrant's website! Hope you enjoy the time browsing herer!
      </div>
      <Button variant="contained" data-testid="about-me">
        About Me
      </Button>
      <Button variant="contained" data-testid="my-majority">
        My Majority
      </Button>
      <Button variant="contained" data-testid="working-experience">
        Working Experience
      </Button>
      <Button
        variant="contained"
        data-testid="other-experience"
        style={{ backgroundColor: "white", color: "black" }}
      >
        Other Experience
      </Button>
      <Button
        variant="contained"
        data-testid="my-hobbies"
        style={{ backgroundColor: "white", color: "black" }}
      >
        My Hobbies
      </Button>
      <Button variant="contained" data-testid="contact-with-me">
        Contact With Me
      </Button>
    </>
  );
}

export default Home;
