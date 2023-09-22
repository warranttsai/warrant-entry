// modules
import { Divider } from "@mui/material";
// styled-components
import {
  FlexColumnCenteredContainer,
  LabSection,
} from "../../../components/styled-component/Container";
// components
import {
  DrawImageForFrontEndDesign,
  EncapsulateYourStyleSheet,
} from "../../../components/software-engineer-note/FrontEndDesign";
import { ObjectOrientation } from "../../../components/software-engineer-note/ObjectOrientation";
import {
  HowToEnableCORS,
  AddingCorsHeaderToYourApiResponseHeader,
} from "../../../components/software-engineer-note/AwsKnowledges";

export default function MyCodingBible() {
  return (
    <FlexColumnCenteredContainer>
      {/* Header */}
      <div className="w-100" style={{ maxWidth: "60vw", minHeight: "20vh" }}>
        <div
          style={{
            color: "black",
            textAlign: "left",
          }}
        >
          <span
            style={{
              fontSize: 50,
              fontWeight: 700,
            }}
          >
            Software Engineer Note
          </span>
        </div>
        <div
          style={{
            color: "black",
            textAlign: "left",
          }}
        >
          <span>
            This section is my note for software engineer experience. Creating a
            simple documentation here as my engineering bible.
            <p style={{ color: "red" }}>
              Note: These are all from my understanding. It might be slightly
              different from general definition.{" "}
            </p>
          </span>
        </div>
      </div>
      <Divider
        style={{
          width: "90%",
          marginInline: "auto",
        }}
      />
      <LabSection>
        <DrawImageForFrontEndDesign />
      </LabSection>
      <LabSection>
        <EncapsulateYourStyleSheet />
      </LabSection>
      <LabSection>
        <ObjectOrientation />
      </LabSection>
      <LabSection>
        <HowToEnableCORS />
      </LabSection>
      <LabSection>
        <AddingCorsHeaderToYourApiResponseHeader />
      </LabSection>
    </FlexColumnCenteredContainer>
  );
}
