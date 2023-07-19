// modules
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
// images
import Warrant from "../../assets/Warrant.jpg";
import linedinButton from "../../assets/linedin-button.jpeg";
import instagramButton from "../../assets/instagram-button.jpeg";
import facebookButton from "../../assets/facebook-button.jpeg";
// styled comopnents
import {
  Flex1,
  Flex2,
  FlexRowCenteredContainer,
} from "../../components/styled-component/Container";
import { BlackCenterTitle } from "../../components/styled-component/Title";
import { RectangleBoxShadow } from "../../components/styled-component/BoxShadow";
import { NormalContent } from "../../components/styled-component/Content";

function AboutMe() {
  const myPersonalities = [
    { id: 1, name: "Highly Organized" },
    { id: 2, name: "Fast Learner" },
    { id: 3, name: "Optimistic" },
    { id: 4, name: "Open-minded" },
    { id: 5, name: "Strong Communicator" },
  ];
  const handleDelete = () => {
    // Handle the delete action here
    console.log("Chip deleted!");
  };

  return (
    <>
      <FlexRowCenteredContainer style={{ paddingInline: "200px" }}>
        <Flex1>
          <RectangleBoxShadow>
            <img src={Warrant} style={{ maxWidth: "350px" }} />
          </RectangleBoxShadow>
        </Flex1>
        <Flex2>
          <Flex1>
            <BlackCenterTitle data-testid="intro-title">
              Introduction
            </BlackCenterTitle>
          </Flex1>
          <Flex1>
            <NormalContent>
              My name is Warrant TSAI, the 2023 graduate of Master of
              Information Technology from RMIT. I was growing up in Taiwan (the
              R.O.C.) and moving to Melbourne Australia since June 2020. As a
              Information Technology student, my majorities are covering across
              different program languages especially for website development.
              Apart from it, I'm also a street dancer. I had learned Popping
              dance for 7 years and a beginner of Hip-hop and House dance. In
              2023, I was taking the role to be the secretary of student dancing
              club in RMIT which named "Funkdelics".
            </NormalContent>
          </Flex1>
          <Flex1>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center" // Align items vertically to the center
              justifyContent="center" // Justify items horizontally to the center
            >
              {myPersonalities.map((item) => {
                return (
                  <Chip
                    key={item.id}
                    label={item.name}
                    onDelete={handleDelete}
                  />
                );
              })}
            </Stack>
          </Flex1>
        </Flex2>
      </FlexRowCenteredContainer>
      <div
        data-testid="social-media"
        style={{
          height: "auto",
          maxWidth: "max-content",
          margin: "20px auto 0 auto",
          fontFamily: "Raleway,sans-serif",
          fontSize: "15px",
          fontWeight: "800",
          lineHeight: "70px",
          textAlign: "center",
          textTransform: "uppercase",
          border: "4px solid black",
          borderRadius: "10px",
        }}
      >
        <BlackCenterTitle data-testid="my-social-media">
          My Social Media
        </BlackCenterTitle>
        <FlexRowCenteredContainer style={{ margin: "50px 400px 0 400px" }}>
          <Flex1>
            <button
              data-testid="linedin-button"
              style={{ background: "white" }}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/warrant-tsai-20463414b/",
                  "_blank"
                )
              }
            >
              <img
                src={linedinButton}
                style={{ width: "50px", height: "50px" }}
              />
            </button>
          </Flex1>
          <Flex1>
            <button
              data-testid="instagram-button"
              style={{ background: "white" }}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/warrant_job_hunting/",
                  "_blank"
                )
              }
            >
              <img
                src={instagramButton}
                style={{ width: "50px", height: "50px" }}
              />
            </button>
          </Flex1>
          <Flex1>
            <button
              data-testid="facebook-button"
              style={{ background: "white" }}
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=100007257571234",
                  "_blank"
                )
              }
            >
              <img
                src={facebookButton}
                style={{ width: "50px", height: "50px" }}
              />
            </button>
          </Flex1>
        </FlexRowCenteredContainer>
      </div>
    </>
  );
}

export default AboutMe;
