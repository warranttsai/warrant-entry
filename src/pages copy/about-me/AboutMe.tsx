// modules
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// images
import Warrant from "../../assets/Warrant.jpg";
// components
import ContactWithMe from "../../components/contact-with-me/ContactWithMe";
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
        {/* Introduction */}
        <section id="introduction">
          <BlackCenterTitle data-testid="intro-title">
            Introduction
          </BlackCenterTitle>

          <FlexRowCenteredContainer style={{ gap: 10 }}>
            <Flex1 className="w-100">
              <RectangleBoxShadow
                id="warrant-image-container"
                className="w-100"
              >
                {!imageLoaded ? (
                  <span className="w-100">Loading...</span>
                ) : (
                  <img className="w-100" src={Warrant} />
                )}
              </RectangleBoxShadow>
            </Flex1>
            <Flex2
              data-testid="introduction-content"
              className="w-100 h-100 d-flex justify-content-start align-items-start"
              style={{ minWidth: 400 }}
            >
              <NormalContent className="w-100 h-100">
                Warrant is a results-driven web developer with one and a half
                years of proficiency in{" "}
                <span style={{ color: "red" }}>React JS/TS</span> development.
                Recently conferred a{" "}
                <span style={{ color: "red" }}>
                  master's degree in Information Technology (2022)
                </span>
                , demonstrating a commitment to continuous learning. Proven
                expertise in backend development utilizing{" "}
                <span style={{ color: "blue" }}>
                  Lambda serverless framework, Node.JS, Sails.JS, and Python
                  Flask
                </span>
                . Known for an insatiable appetite for acquiring new knowledge,
                paired with a reputation for responsibility, organizational
                prowess, and a willingness to tackle new challenges head-on. An
                open-minded individual receptive to diverse perspectives and
                suggestions.
              </NormalContent>
            </Flex2>
          </FlexRowCenteredContainer>
        </section>
        {/* Contact With Me */}
        <section>
          <ContactWithMe />
        </section>
      </motion.div>
    </div>
  );
}

export default AboutMe;
