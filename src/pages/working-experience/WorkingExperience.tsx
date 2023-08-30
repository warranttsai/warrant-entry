// styled-components
import { BlackCenterTitle } from "../../components/styled-component/Title";
import {
  BlackBackgroundContainer,
  FlexColumnCenteredContainer,
  // Flex1,
} from "../../components/styled-component/Container";
// components
import Cleanstormwater from "../../components/working-experience-component/clean-stormwater/CleanStormwater";
import Fila from "../../components/working-experience-component/fila/Fila";
import Funkdelics from "../../components/working-experience-component/funkdelics/Funkdelics";
import Blackball from "../../components/working-experience-component/blackball/Blackball";
import PoppingDanceInstructor from "../../components/working-experience-component/popping-dance-instructor/PoppingDanceInstructor";

export default function WorkingExperience() {
  return (
    <>
      <div style={{ padding: "20px 150px" }}>
        <FlexColumnCenteredContainer style={{ gap: "10px" }}>
          <Cleanstormwater />
          <Fila />
          <Funkdelics />
        </FlexColumnCenteredContainer>
      </div>
      <BlackBackgroundContainer>
        <BlackCenterTitle style={{ color: "white" }}>
          Other Experiences
        </BlackCenterTitle>
        <FlexColumnCenteredContainer style={{ gap: "10px" }}>
          <Blackball />
          <PoppingDanceInstructor />
        </FlexColumnCenteredContainer>
      </BlackBackgroundContainer>
    </>
  );
}
