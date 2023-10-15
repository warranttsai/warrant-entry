// modules
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
// images
import Warrant from "../../assets/Warrant.jpg";
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
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 1000);

    // Clean up the timer if the component unmounts before the timeout
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ marginBlock: 10, paddingInline: "10vw" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <BlackCenterTitle data-testid="intro-title">
          Introduction
        </BlackCenterTitle>

        <FlexRowCenteredContainer style={{ gap: 10 }}>
          <Flex1 className="w-100 h-100">
            <RectangleBoxShadow
              id="warrant-image-container"
              className="w-100 h-100"
            >
              {!imageLoaded ? (
                <span className="w-100 h-100">Loading...</span>
              ) : (
                <img className="w-100 h-100" src={Warrant} />
              )}
            </RectangleBoxShadow>
          </Flex1>
          <Flex1
            data-testid="introduction-content"
            className="w-100 h-100 d-flex justify-content-start align-items-start"
            style={{ minWidth: 250 }}
          >
            <NormalContent className="w-100 h-100">
              Results-driven web developer with one and a half years of
              proficiency in <span style={{ color: "red" }}>React JS/TS</span>
              development. Recently conferred a{" "}
              <span style={{ color: "red" }}>
                master's degree in Information Technology (2022)
              </span>
              , demonstrating a commitment to continuous learning. Proven
              expertise in backend development utilizing{" "}
              <span style={{ color: "blue" }}>
                Lambda serverless framework, Node.JS, Sails.JS, and Python Flask
              </span>
              . Known for an insatiable appetite for acquiring new knowledge,
              paired with a reputation for responsibility, organizational
              prowess, and a willingness to tackle new challenges head-on. An
              open-minded individual receptive to diverse perspectives and
              suggestions.
            </NormalContent>
          </Flex1>
        </FlexRowCenteredContainer>
        <br />
        <Stack
          id="my-personality-section"
          width="50%"
          data-testid="my-personalities"
          direction="row"
          spacing={1}
          alignItems="center" // Align items vertically to the center
          justifyContent="center" // Justify items horizontally to the center
          flexWrap="wrap"
          style={{
            marginInline: "auto",
          }}
        >
          {myPersonalities.map((item) => {
            return (
              <Flex1 key={item.id}>
                <Chip label={item.name} />
              </Flex1>
            );
          })}
        </Stack>
      </motion.div>
    </div>
  );
}

export default AboutMe;
