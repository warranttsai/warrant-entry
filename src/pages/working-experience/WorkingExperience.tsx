// styled-components
import { BrownCenterTitle } from "../../components/styled-component/Title";
import {
  BlackBackgroundContainer,
  FlexRowCenteredContainer,
  Flex1,
} from "../../components/styled-component/Container";
import Cleanstormwater from "../../components/working-experience-component/clean-stormwater/CleanStormwater";

export default function WorkingExperience() {
  return (
    <>
      <div style={{ padding: "20px 150px" }}>
        <BrownCenterTitle>Present</BrownCenterTitle>
        <FlexRowCenteredContainer>
          <Cleanstormwater />
          <Flex1>1</Flex1>
          <Flex1>1</Flex1>
        </FlexRowCenteredContainer>
      </div>
      <BlackBackgroundContainer>
        <BrownCenterTitle>Previous Experious</BrownCenterTitle>
      </BlackBackgroundContainer>
    </>
  );
}
