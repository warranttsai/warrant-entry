// images
import Warrant from "../../assets/Warrant.jpg";
// styled comopnents
import {
  Flex1,
  FlexRowCenteredContainer,
} from "../../components/styled-component/Container";
import { BlackCenterTitle } from "../../components/styled-component/Title";
import { RectangleBoxShadow } from "../../components/styled-component/BoxShadow";

function AboutMe() {
  return (
    <FlexRowCenteredContainer>
      <Flex1>
        <Flex1>
          <RectangleBoxShadow>
            <img src={Warrant} style={{ maxWidth: "350px" }} />
          </RectangleBoxShadow>
        </Flex1>
      </Flex1>
      <Flex1>
        <BlackCenterTitle data-testid="intro-title">
          Introduction
        </BlackCenterTitle>
      </Flex1>
    </FlexRowCenteredContainer>
  );
}

export default AboutMe;
