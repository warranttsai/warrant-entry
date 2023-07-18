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

function AboutMe() {
  return (
    <FlexRowCenteredContainer>
      <Flex1>
        <RectangleBoxShadow>
          <img src={Warrant} style={{ maxWidth: "350px" }} />
        </RectangleBoxShadow>
      </Flex1>
      <Flex2>
        <BlackCenterTitle data-testid="intro-title">
          Introduction
        </BlackCenterTitle>
        <span>
          My name is Warrant TSAI, the 2023 graduate of Master of Information
          Technology from RMIT. I was growing up in Taiwan (the R.O.C.) and
          moving to Melbourne Australia since June 2020. As a Information
          Technology student, my majorities are covering across different
          program languages especially for website development. Apart from it,
          I'm also a street dancer. I had learned Popping dance for 7 years and
          a beginner of Hip-hop nad House dance. In 2023, I was taking the role
          to be the secretary of student dancing club in RMIT which named
          "Funkdelics"
        </span>
      </Flex2>
    </FlexRowCenteredContainer>
  );
}

export default AboutMe;
