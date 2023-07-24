// styled-components
import { BlackCenterTitle } from "../../components/styled-component/Title";
import {
  BlackBackgroundContainer,
  FlexColumnCenteredContainer,
  // Flex1,
} from "../../components/styled-component/Container";
import Cleanstormwater from "../../components/working-experience-component/clean-stormwater/CleanStormwater";
import Fila from "../../components/working-experience-component/fila/Fila";
import Funkdelics from "../../components/working-experience-component/funkdelics/Funkdelics";

export default function WorkingExperience() {
  return (
    <>
      <div style={{ padding: "20px 150px" }}>
        <BlackCenterTitle>Present</BlackCenterTitle>
        <FlexColumnCenteredContainer style={{ gap: "10px" }}>
          <Cleanstormwater />
          <Fila />
          <Funkdelics />
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
