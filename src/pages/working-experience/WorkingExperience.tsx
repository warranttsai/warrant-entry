// styled-components
import { BlackCenterTitle } from "../../components/styled-component/Title";
import {
  BlackBackgroundContainer,
  FlexColumnCenteredContainer,
  Flex1,
} from "../../components/styled-component/Container";
import Cleanstormwater from "../../components/working-experience-component/clean-stormwater/CleanStormwater";

export default function WorkingExperience() {
  return (
    <>
      <div style={{ padding: "20px 150px" }}>
        <BlackCenterTitle>Present</BlackCenterTitle>
        <FlexColumnCenteredContainer>
          <Cleanstormwater />
        </FlexColumnCenteredContainer>
      </div>
      <BlackBackgroundContainer>
        <BlackCenterTitle style={{ color: "white" }}>
          Previous Experience
        </BlackCenterTitle>
        <FlexColumnCenteredContainer>Coming soon!</FlexColumnCenteredContainer>
      </BlackBackgroundContainer>
    </>
  );
}
