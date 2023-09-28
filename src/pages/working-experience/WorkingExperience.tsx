// module
import { motion } from "framer-motion";
// styled-components
import { BlackCenterTitle } from "../../components/styled-component/Title";
import {
  GreyBackgroundContainer,
  Flex1,
  FlexColumnCenteredContainer,
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
      <div>
        <BlackCenterTitle>Software Engineer Experience</BlackCenterTitle>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FlexColumnCenteredContainer>
            <Flex1 className="w-100">
              <Cleanstormwater />
            </Flex1>
          </FlexColumnCenteredContainer>
        </motion.div>
      </div>
      <GreyBackgroundContainer>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div
            style={{ padding: "1vh 5vw", width: "50%", marginInline: "auto" }}
          >
            <BlackCenterTitle style={{ color: "white" }}>
              The Other Experience
            </BlackCenterTitle>
            <FlexColumnCenteredContainer style={{ gap: "10px" }}>
              <Flex1 className="w-100">
                <Fila />
              </Flex1>
              <Flex1 className="w-100">
                <Funkdelics />
              </Flex1>
              <Flex1 className="w-100">
                <Blackball />
              </Flex1>
              <Flex1 className="w-100">
                <PoppingDanceInstructor />
              </Flex1>
            </FlexColumnCenteredContainer>
          </div>
        </motion.div>
      </GreyBackgroundContainer>
    </>
  );
}
