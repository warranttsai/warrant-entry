// modules
import { useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
// images
import Warrant from "../../assets/Warrant.jpg";
import linedinButton from "../../assets/linedin-button.jpeg";
import instagramButton from "../../assets/instagram-button.jpeg";
import facebookButton from "../../assets/facebook-button.jpeg";
// scss
import "./AboutMe.scss";
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
  const myPersonalities: Array<{ id: number; name: string }> = [
    { id: 1, name: "Highly Organized" },
    { id: 2, name: "Fast Learner" },
    { id: 3, name: "Optimistic" },
    { id: 4, name: "Open-minded" },
    { id: 5, name: "Strong Communicator" },
  ];

  return (
    <>
      <BlackCenterTitle data-testid="intro-title">
        Introduction
      </BlackCenterTitle>
      <FlexRowCenteredContainer style={{ paddingInline: "200px" }}>
        <Flex1>
          <RectangleBoxShadow>
            <img
              src={Warrant}
              style={{ maxWidth: "350px", maxHeight: "450px" }}
            />
          </RectangleBoxShadow>
        </Flex1>
        <Flex2>
          <Flex1></Flex1>
          <Flex1
            data-testid="introduction-content"
            className="introduction-content-area"
          >
            <NormalContent>
              My name is Warrant TSAI, and in 2023, I successfully completed my
              Master of Information Technology from RMIT. Originally from Taiwan
              (the R.O.C.), I relocated to Melbourne, Australia in June 2020 to
              pursue my academic and personal aspirations. <br />
              <br />
              During my academic journey, I developed a keen interest and
              proficiency in various programming languages, particularly in the
              domain of website development. This area of study has been a major
              focus of mine throughout my Information Technology program. <br />
              <br />
              Beyond my academic pursuits, I also have a passion for street
              dancing. I have been dedicatedly learning Popping dance for seven
              years and have recently embarked on my journey as a beginner in
              Hip-hop and House dance styles. Additionally, I had the privilege
              of serving as the secretary of the student dancing club
              "Funkdelics" at RMIT in 2023. <br />
              <br />
              In this capacity, I actively contributed to the organization and
              successful execution of various dance events and activities within
              the club. Thank you for taking the time to learn more about my
              background and interests. I am excited about the future
              opportunities that await me in the field of Information Technology
              and the world of dance.
            </NormalContent>
          </Flex1>
        </Flex2>
      </FlexRowCenteredContainer>
      <br />
      <div id="my-personality-section">
        <Flex1>
          <Stack
            data-testid="my-personalities"
            direction="row"
            spacing={1}
            alignItems="center" // Align items vertically to the center
            justifyContent="center" // Justify items horizontally to the center
          >
            {myPersonalities.map((item) => {
              return <Chip key={item.id} label={item.name} />;
            })}
          </Stack>
        </Flex1>
      </div>
      <div
        data-testid="social-media"
        style={{
          height: "auto",
          maxWidth: "max-content",
          margin: "20px auto 20px auto",
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
